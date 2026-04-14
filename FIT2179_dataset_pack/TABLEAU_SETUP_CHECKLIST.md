# Tableau Setup Checklist — FIT2179

This guide is the practical “do this in Tableau” version of the dataset pack.

The goal is not just to make enough charts to satisfy the rubric. The goal is to build an **11-chart visual argument** that:
- proves home-ground advantage exists
- shows that it is uneven across clubs and venues
- explains the likely mechanisms behind it
- ends with the structural question of whether the AFL’s biggest game is truly neutral

---

## Before you start

### Recommended files to keep handy
Use these files as your main working set:
- `dataset_b_and_chart1_ready/chart1_distance_vs_winpct_ready.csv`
- `cleaned_dataset_a/dataset_a_team_season_summary_2010_2024.csv`
- `cleaned_dataset_a/dataset_a_team_games_2010_2024.csv`
- `dataset_c_ready/dataset_c_bom_climate_7cities_march_to_september.csv`
- `dataset_d_ready/dataset_d_grand_final_summary_1990_2024.csv`

### Recommended Tableau workflow
- Start a new workbook
- Add each CSV as a separate data source when needed
- Name your sheets clearly:
  - `Chart 1`
  - `Chart 2`
  - `Chart 3`
  - etc.
- Build the easy charts first so you lock in progress early
- Leave the more custom charts until later

### Suggested narrative structure
This 11-chart version works best as a **three-act story**.

#### Act 1 — Prove that home-ground advantage exists
1. League-wide home vs away win rate
2. Home advantage over time
3. Fortress Matrix — team by venue win percentage
4. Home vs away win percentage by club

#### Act 2 — Explain the likely causes
5. Distance travelled vs win percentage
6. State-by-state performance comparison
7. True home vs shared home comparison
8. Average temperature by city and month
9. Climate-split home/away performance

#### Act 3 — Show the structural consequence
10. Grand Final winners with MCG home-ground highlight
11. Grand Final timeline — Victorian vs interstate winners

---

## Chart 1 — League-Wide Home vs Away Win Rate

### File
- `cleaned_dataset_a/dataset_a_team_games_2010_2024.csv`

### Goal
Establish the baseline fact that teams win more often at home than away.

### Why it matters in the story
This is the opener. Before asking why home-ground advantage exists, you should first prove that it exists at all.

### Suggested chart type
- Side-by-side bar chart
- Or lollipop / dot comparison if you want it cleaner

### Steps
1. Connect to the CSV.
2. Drag `Game_Type` to **Columns**.
3. Drag `Win` to **Rows**.
4. Make sure `Win` is aggregated as **Average**.
   - This gives win rate because `Win` is coded 1/0.
5. Format the axis as a percentage.
6. Set Marks to `Bar`.
7. Add labels showing the final percentages.

### Nice touches
- Add a subtitle such as:
  - `Across all AFL team-games, home teams win more often than away teams`
- Add a reference line if you want to emphasise the gap.

---

## Chart 2 — Home Advantage Over Time

### File
- `cleaned_dataset_a/dataset_a_team_games_2010_2024.csv`

### Goal
Show whether home-ground advantage is stable, increasing, or shrinking over time.

### Why it matters in the story
This takes the opener one step further. It shows whether the effect is a one-off quirk or a persistent league-wide pattern.

### Suggested chart type
- Line chart with separate lines for `Home` and `Away`
- Or a line for home win rate only if you want a cleaner read

### Steps
1. Connect to the CSV.
2. Drag `Season` to **Columns**.
3. Drag `Win` to **Rows**.
4. Drag `Game_Type` to **Colour**.
5. Aggregate `Win` as **Average**.
6. Set Marks to `Line`.
7. Format `Win` as a percentage.

### Nice touches
- Annotate years where the gap changes noticeably.
- If the dual-line chart feels cluttered, keep only the `Home` line and note that away is the mirror image.

---

## Chart 3 — Fortress Matrix (Team × Venue Win % Heatmap)

### File
- `cleaned_dataset_a/dataset_a_team_games_2010_2024.csv`

### Goal
Show that certain clubs are dramatically stronger at specific venues.

### Why it matters in the story
This is where the argument gets more interesting. It shifts from “home teams usually do better” to “some venues are genuine fortresses.” That makes the case feel specific and concrete.

### Suggested chart type
- Heatmap

### Recommended setup choice
You have two reasonable options:
- **Option A:** include all team-venue combinations
- **Option B:** filter to `Game_Type = Home` so the matrix reflects home-designated venue performance only

Option B is cleaner if your narrative is specifically about home-ground strength.

### Steps
1. Connect to the CSV.
2. Drag `Team` to **Rows**.
3. Drag `Venue` to **Columns**.
4. Optional: filter to `Game_Type = Home`.
5. Drag `Win` to **Colour**.
6. Aggregate `Win` as **Average**.
7. Set Marks to `Square`.
8. Optionally drag `Win` to **Label** as well.

### Important caution
Small sample sizes can create fake-looking fortresses.
If possible, add the number of matches to tooltip and consider filtering out combinations with very few games.

### Nice touches
- Highlight venues like `GMHBA Stadium`, `Adelaide Oval`, or `Optus Stadium` if they stand out.
- Add tooltip fields: `Team`, `Venue`, `AVG(Win)`, `COUNT(Number of Records)`.

---

## Chart 4 — Home Win % vs Away Win % by Club (Dumbbell)

### File
- `cleaned_dataset_a/dataset_a_team_season_summary_2010_2024.csv`

### Goal
Show which clubs have the biggest home-ground effect.

### Why it matters in the story
This chart personalises the league-wide pattern. It shows that home-ground advantage is real but uneven, which sets up the need to explain why some clubs benefit more than others.

### Prep
You may want to aggregate to one row per team across 2010–2024 in Tableau.

### Steps
1. Connect to the CSV.
2. Drag `Team` to **Rows**.
3. Create calculated field:
   - `Difference = AVG([Home_Win_Pct]) - AVG([Away_Win_Pct])`
4. Sort `Team` by `Difference` descending.
5. Build two points:
   - `AVG(Home_Win_Pct)`
   - `AVG(Away_Win_Pct)`
6. Use a dual-axis or layered marks setup.
7. Add a connecting line between the two points.

### Simpler fallback
If the dumbbell becomes annoying:
- use side-by-side dots first
- then add the connecting line once the positions are correct

### Colour idea
- Colour by `State`

---

## Chart 5 — Distance Travelled vs Win Percentage

### File
- `dataset_b_and_chart1_ready/chart1_distance_vs_winpct_ready.csv`

### Goal
Test whether teams that travel more tend to perform worse.

### Why it matters in the story
This is the first mechanism chart. It challenges the common assumption that travel alone explains everything.

### Suggested chart type
- Scatter plot

### Steps
1. Connect to the CSV.
2. Drag `Total_KM_Travelled` to **Columns**.
3. Drag `Win_Pct` to **Rows**.
4. Set **Marks** to `Circle`.
5. Drag `State` to **Colour**.
6. Drag `Team` to **Detail**.
7. Drag `Season` to **Detail** or **Tooltip**.
8. Optional: add a trend line.

### Nice touches
- Add `Team`, `Season`, `Wins`, and `Games_Played` to tooltip.
- Use a title such as:
  - `Distance Travelled vs Win Percentage (2010–2024)`

---

## Chart 6 — State-by-State Performance Comparison

### File
- `cleaned_dataset_a/dataset_a_team_season_summary_2010_2024.csv`

### Goal
Compare average team performance by state.

### Why it matters in the story
This lifts the analysis from individual clubs to structural geography. It helps explain why the travel chart is messy: geography matters, but not in a simple one-direction way.

### Suggested chart type
- Bar chart

### Steps
1. Connect to the CSV.
2. Drag `State` to **Columns**.
3. Drag `Win_Pct` to **Rows**.
4. Change aggregation to **Average** if needed.
5. Set Marks to `Bar`.
6. Optional: drag `State` to `Colour`.
7. Add `Team` and `Season` to tooltip.

### Optional alternative
If you want a more explicit win/loss framing:
- create a calculated field like:
  - `Losses = Total_Games - Total_Wins`
- then compare wins and losses by state

---

## Chart 7 — True Home vs Shared Home Comparison

### File
- `cleaned_dataset_a/dataset_a_team_games_2010_2024.csv`

### Goal
Show that home-ground advantage is weaker when the opponent is also familiar with the venue.

### Why it matters in the story
This is one of the strongest mechanism charts. It isolates familiarity and shared-ground effects. It helps prove that home-ground advantage is not just “playing in your own city,” but often about the opponent being less comfortable.

### Suggested chart type
- Grouped bar chart

### What you need to classify
You will need to create a simple categorisation for matches such as:
- `Shared Home Context`
- `True Home Context`

A practical version for Victorian clubs is:
- `Shared Home` = home team playing another Victorian club at a commonly shared venue such as the MCG or Marvel
- `True Home` = home team playing an interstate club at that venue

### Example calculated field logic
You may create a field like:

```text
IF [Venue] = 'M.C.G.' AND [Game_Type] = 'Home' THEN
    IF [Opponent State] = 'VIC' THEN 'Shared Home'
    ELSE 'True Home'
    END
END
```

Because the dataset does not include `Opponent State` directly, you may need to create a manual club-state group in Tableau or use a small helper table if needed.

### Simplified fallback
If building the full shared-venue classification becomes annoying, make a version focused only on:
- MCG home games by Victorian clubs
- split by opponent state: `VIC` vs `Non-VIC`

### Steps
1. Connect to the CSV.
2. Filter to relevant venues or clubs if needed.
3. Create your `Home_Context` grouping.
4. Put `Home_Context` on **Columns**.
5. Put `AVG(Win)` on **Rows**.
6. Split by `Team` or by a simplified club grouping.
7. Use grouped bars.

### Nice touches
- Keep the chart tightly scoped so the comparison is easy to read.
- Use annotations to explain why shared venues dilute the effect.

---

## Chart 8 — Average Temperature by City & Month (Heatmap)

### File
- `dataset_c_ready/dataset_c_bom_climate_7cities_march_to_september.csv`

### Goal
Show climate differences across AFL cities over the season months.

### Why it matters in the story
This is the environmental setup chart. It prepares the viewer to accept that teams are not competing under one neutral climate.

### Suggested chart type
- Heatmap

### Steps
1. Connect to the CSV.
2. Drag `City` to **Rows**.
3. Drag `Month` to **Columns**.
4. Sort months using `Month_Num`.
   - you may need to drag `Month_Num` in, sort, then hide it from display logic
5. Set Marks to `Square`.
6. Drag `Avg_Max_Temp_C` to **Colour**.
7. Optional: drag `Avg_Max_Temp_C` to **Label** as well.

### Optional variants
- Use `Avg_Min_Temp_C` instead
- Use `Avg_Rainfall_mm` for a second heatmap, but only if you really need an alternative climate angle

---

## Chart 9 — Climate-Split Home/Away Performance

### Files
- `dataset_a_team_games_2010_2024.csv`
- `dataset_c_ready/dataset_c_bom_climate_7cities_march_to_september.csv`

### Goal
Compare performance in similar vs different climates.

### Why it matters in the story
This is the payoff for the climate section. It moves from “cities have different climates” to “those climate differences may affect results.”

### Join setup
In Tableau data source view:
1. Add `dataset_a_team_games_2010_2024.csv`
2. Add `dataset_c_bom_climate_7cities_march_to_september.csv`
3. Join on:
   - `Venue_City = City`
   - `Month = Month`

### After the join
Create calculations such as:

#### Venue temperature
Use:
- `Avg_Max_Temp_C`

#### Home city temperature
This part is trickier because Tableau also needs the team's home city climate.
You may need either:
- a second copy of Dataset C joined via a club→home city mapping, or
- a manual lookup table for club home city

### Simplified version if you’re under time pressure
You can still build a version of Chart 9 by:
- focusing on `Venue_City` climate only
- splitting by `Game_Type`
- comparing home vs away win rate in hotter vs cooler venues

### If doing full version
Create calculated fields:
- `Temp_Difference = ABS([Venue_Avg_Temp] - [Home_City_Avg_Temp])`
- `Climate_Match = IF [Temp_Difference] >= 8 THEN "Different Climate" ELSE "Similar Climate" END`

Then:
1. Put `Climate_Match` on Columns
2. Put `AVG(Win)` on Rows
3. Split by `Game_Type` or by `Team Category`
4. Use grouped bars

### Practical note
This is still the fiddliest chart in the pack.
Build everything else first so this chart cannot hold your assignment hostage.

---

## Chart 10 — Grand Final Winners — MCG Home Ground Highlight

### File
- `dataset_d_ready/dataset_d_grand_final_summary_1990_2024.csv`

### Goal
Highlight how often winners were MCG-tenant clubs.

### Why it matters in the story
This is where the visualisation stops asking about natural sporting patterns and starts asking whether the structure of the competition itself creates advantage.

### Suggested chart type
- Bar chart, dot plot, or annotated timeline marks

### Steps
1. Connect to the CSV.
2. Drag `Year` to **Columns**.
3. Drag a simple measure like `Margin` or `Number of Records` to **Rows**.
4. Drag `MCG_Tenant` to **Colour**.
5. Drag `Winner` to **Label** or **Tooltip**.
6. Add `Winner_Ladder_Pos`, `Runner_Up_Ladder_Pos`, and `Higher_Ranked_Won` to tooltip.

### Better storytelling option
Use annotations for:
- 1997
- 1998
- 2017
- other years where a lower-ranked or interstate side lost at the MCG

---

## Chart 11 — Grand Final Timeline — Victorian vs Interstate Winners

### File
- `dataset_d_ready/dataset_d_grand_final_summary_1990_2024.csv`

### Goal
Show the longer-run pattern of Victorian and interstate Grand Final winners.

### Why it matters in the story
This is the ending chart. It broadens the Grand Final argument from individual anecdotes to long-term structure.

### Suggested chart type
- Timeline bar chart
- Or dot plot by year

### Steps
1. Connect to the CSV.
2. Drag `Year` to **Columns**.
3. Drag `Number of Records` to **Rows**.
4. Set Marks to `Bar`.
5. Drag `Winner_Category` to **Colour**.
6. Add `Winner`, `Runner_Up`, `Matchup_Type`, and `Venue` to tooltip.

### Optional refinement
Use `Matchup_Type` for colour instead if you want to show:
- Vic vs Vic
- Vic vs Interstate
- Interstate vs Interstate

---

## Practical tips

### 1. Keep titles clear
Use explicit titles such as:
- `Do Home Teams Actually Win More Often?`
- `Which AFL Grounds Are True Fortresses?`
- `Does Climate Make Home Advantage Stronger?`

### 2. Fix month order early
If Tableau alphabetises months, use `Month_Num` to control the order.

### 3. Use tooltips properly
Good tooltips can make a mid chart feel much smarter.
Include:
- team
- season
- win %
- venue
- margin
- state

### 4. Don’t overcomplicate colours
Pick one colour logic per chart:
- by state
- by category
- by climate match
- by MCG tenant status
- by home vs away

### 5. Use a consistent baseline when possible
Where useful, add a reference line for:
- average home win rate
- average league win rate
- neutral midpoint

This helps viewers see what is extreme versus ordinary.

### 6. Small-sample warnings matter
Venue and team combinations can look dramatic with low counts.
Whenever possible, show match counts in tooltips or filter out tiny samples.

### 7. Chart 9 is still the fiddliest one
If one chart is going to annoy you, it’ll be Chart 9.
Do the other charts first so you rack up progress and don’t lose your mind in a join at 1:14am.

---

## Best order to build the assignment
If you want the easiest run:

1. Chart 1 — League-wide home vs away win rate
2. Chart 2 — Home advantage over time
3. Chart 5 — Distance travelled vs win percentage
4. Chart 6 — State-by-state performance comparison
5. Chart 8 — Climate heatmap
6. Chart 10 — Grand Final winners with MCG highlight
7. Chart 11 — Grand Final timeline
8. Chart 4 — Home vs away by club
9. Chart 3 — Fortress Matrix
10. Chart 7 — True home vs shared home
11. Chart 9 — Climate-split home/away performance

That order gets quick wins first, then leaves the more annoying custom logic charts until later.

---

## Final recommendation
If time gets tight, make sure you finish these first:
- Chart 1
- Chart 2
- Chart 4
- Chart 5
- Chart 6
- Chart 8
- Chart 10
- Chart 11

Those give you a strong, defendable narrative core.

Then add:
- Chart 3
- Chart 7
- Chart 9

Those are the charts that add richness and mechanism detail once the backbone is secure.