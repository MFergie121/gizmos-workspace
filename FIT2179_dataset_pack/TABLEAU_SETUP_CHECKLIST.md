# Tableau Setup Checklist — FIT2179

This guide is the practical “do this in Tableau” version of the dataset pack.

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

---

## Chart 1 — Distance Travelled vs Win Percentage

### File
- `chart1_distance_vs_winpct_ready.csv`

### Goal
Scatter plot showing whether more travel is associated with lower or higher win percentage.

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
- Use a clear title like:
  - `Distance Travelled vs Win Percentage (2010–2024)`

---

## Chart 2 — State by State Win/Loss Comparison

### File
- `dataset_a_team_season_summary_2010_2024.csv`

### Goal
Compare average performance by state.

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

## Chart 3 — Home Win % vs Away Win % (Dumbbell)

### File
- `dataset_a_team_season_summary_2010_2024.csv`

### Goal
Show the gap between home and away performance for each club.

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

## Chart 4 — Average Temperature by City & Month (Heatmap)

### File
- `dataset_c_bom_climate_7cities_march_to_september.csv`

### Goal
Show climate differences across AFL cities over the season months.

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
- Use `Avg_Rainfall_mm` for a second heatmap

---

## Chart 5 — Climate-Split Home/Away Wins

### Files
- `dataset_a_team_games_2010_2024.csv`
- `dataset_c_bom_climate_7cities_march_to_september.csv`

### Goal
Compare performance in similar vs different climates.

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
You can still build a version of Chart 5 by:
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

---

## Chart 6 — Grand Final Winners — MCG Home Ground Highlight

### File
- `dataset_d_grand_final_summary_1990_2024.csv`

### Goal
Highlight how often winners were MCG-tenant clubs.

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

## Chart 7 — Grand Final Timeline — Victorian vs Non-Victorian Winners

### File
- `dataset_d_grand_final_summary_1990_2024.csv`

### Goal
Show the pattern of Victorian vs interstate winners across time.

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
- `Home vs Away Win Percentage by Club (2010–2024)`
- `Average Maximum Temperature by AFL City and Month`

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

### 5. Chart 5 is the fiddliest one
If one chart is going to annoy you, it’ll be Chart 5.
Do the other charts first so you rack up progress and don’t lose your mind in a join at 1:14am.

---

## Best order to build the assignment
If you want the easiest run:

1. Chart 1
2. Chart 2
3. Chart 4
4. Chart 6
5. Chart 7
6. Chart 3
7. Chart 5

That order gets quick wins first, then leaves the more annoying custom/join-heavy charts until later.
