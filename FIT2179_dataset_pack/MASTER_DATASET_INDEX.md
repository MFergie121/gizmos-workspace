# FIT2179 Master Dataset Index

This file is the quick-reference guide for which dataset file to use for each chart in the assignment.

---

## Folder overview

### Core files / folders
- `dataset_a_matches_2010_2024/`
  - Raw AFL match CSVs copied from the AFL-Data-Analysis GitHub repo
- `cleaned_dataset_a/`
  - Cleaned and transformed Dataset A files
- `dataset_b_and_chart1_ready/`
  - Dataset B plus Chart 1-ready merged output
- `dataset_c_ready/`
  - Completed BOM climate dataset
- `dataset_d_ready/`
  - Completed Grand Final dataset
- `DATASET_METHODS.md`
  - Methods for Dataset A and Dataset B
- `DATASET_D_METHOD.md`
  - Methods for Dataset D

---

## Chart-by-chart mapping

## Chart 1 — Distance Travelled vs Win Percentage
**Best file to use:**
- `dataset_b_and_chart1_ready/chart1_distance_vs_winpct_ready.csv`

**Why:**
This is already prepared at the team-season level and includes the travel calculation.

**Fields in this file:**
- `Team`
- `Season`
- `State`
- `Total_KM_Travelled`
- `Wins`
- `Games_Played`
- `Win_Pct`

**Notes:**
- This file combines cleaned Dataset A with Dataset B.
- Best for a scatter plot.

---

## Chart 2 — State by State Win/Loss Comparison
**Best file to use:**
- `cleaned_dataset_a/dataset_a_team_season_summary_2010_2024.csv`

**Fields to use:**
- `State`
- `Team`
- `Season`
- `Home_Wins`
- `Home_Losses`
- `Away_Wins`
- `Away_Losses`
- `Total_Wins`
- `Total_Games`
- `Win_Pct`

**Notes:**
- Aggregate by `State` inside Tableau.
- This is the cleanest starting point for Chart 2.

---

## Chart 3 — Home Win % vs Away Win % (Dumbbell Chart)
**Best file to use:**
- `cleaned_dataset_a/dataset_a_team_season_summary_2010_2024.csv`

**Fields to use:**
- `Team`
- `State`
- `Home_Win_Pct`
- `Away_Win_Pct`

**What to do in Tableau:**
- Aggregate by team across the selected years
- Create a calculated field:
  - `Difference = Home_Win_Pct - Away_Win_Pct`
- Sort by `Difference`

**Notes:**
- This file is already close to the assignment requirements.

---

## Chart 4 — Average Temperature by City & Month (Heatmap)
**Best file to use:**
- `dataset_c_ready/dataset_c_bom_climate_7cities_march_to_september.csv`

**Fields to use:**
- `City`
- `State`
- `Month`
- `Month_Num`
- `Avg_Max_Temp_C`
- `Avg_Min_Temp_C`
- `Avg_Rainfall_mm`

**Best heatmap field:**
- `Avg_Max_Temp_C`

**Notes:**
- Use `Month_Num` to sort months correctly.
- `Month` should be displayed, but `Month_Num` should control order.

---

## Chart 5 — Climate-Split Home/Away Wins
**Base files to use:**
- `cleaned_dataset_a/dataset_a_team_games_2010_2024.csv`
- `dataset_c_ready/dataset_c_bom_climate_7cities_march_to_september.csv`

**How to connect them:**
Join on:
- `Venue_City` ↔ `City`
- `Month` ↔ `Month`

**Fields from Dataset A:**
- `Team`
- `Season`
- `Game_Type`
- `Venue_City`
- `Month`
- `Win`

**Fields from Dataset C:**
- `Avg_Max_Temp_C`
- `Avg_Min_Temp_C`
- `Avg_Rainfall_mm`

**Additional fields you may still need to derive:**
- `Home_City_Avg_Temp`
- `Venue_Avg_Temp`
- `Temp_Difference`
- `Climate_Match`

**Notes:**
- This chart is not fully pre-merged yet.
- The current files give you the required source tables.

---

## Chart 6 — Grand Final Winners — MCG Home Ground Highlight
**Best file to use:**
- `dataset_d_ready/dataset_d_grand_final_summary_1990_2024.csv`

**Fields to use:**
- `Year`
- `Winner`
- `Runner_Up`
- `Winner_State`
- `Winner_Home_Ground`
- `MCG_Tenant`
- `Venue`
- `Winner_Ladder_Pos`
- `Runner_Up_Ladder_Pos`
- `Higher_Ranked_Won`
- `Margin`

**Notes:**
- Best for annotated bar / highlight storytelling.

---

## Chart 7 — Grand Final Timeline — Victorian vs Non-Victorian Winners
**Best file to use:**
- `dataset_d_ready/dataset_d_grand_final_summary_1990_2024.csv`

**Fields to use:**
- `Year`
- `Winner`
- `Winner_Victorian`
- `Runner_Up_Victorian`
- `Matchup_Type`
- `Winner_Category`
- `MCG_Tenant`

**Notes:**
- Same dataset as Chart 6.
- Use colour encoding on `Winner_Category` or `Matchup_Type`.

---

## Fastest practical workflow in Tableau

If you want the least painful setup, start with these:

1. **Chart 1**
   - use `chart1_distance_vs_winpct_ready.csv`
2. **Chart 2 + Chart 3**
   - use `dataset_a_team_season_summary_2010_2024.csv`
3. **Chart 4**
   - use `dataset_c_bom_climate_7cities_march_to_september.csv`
4. **Chart 6 + Chart 7**
   - use `dataset_d_grand_final_summary_1990_2024.csv`
5. **Chart 5**
   - join `dataset_a_team_games_2010_2024.csv` with Dataset C

---

## If you forget everything else
Use these five main files:

- `dataset_b_and_chart1_ready/chart1_distance_vs_winpct_ready.csv`
- `cleaned_dataset_a/dataset_a_team_season_summary_2010_2024.csv`
- `cleaned_dataset_a/dataset_a_team_games_2010_2024.csv`
- `dataset_c_ready/dataset_c_bom_climate_7cities_march_to_september.csv`
- `dataset_d_ready/dataset_d_grand_final_summary_1990_2024.csv`

That is basically the whole assignment data spine.
