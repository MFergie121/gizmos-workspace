# FIT2179 Dataset Methods

This document explains how Dataset A and Dataset B were sourced, cleaned, and transformed for the visualisation.

## Dataset A — AFL Match Results

### Source
Dataset A was sourced from the GitHub repository below, which itself uses AFL Tables as the underlying data source:
- https://github.com/akareen/AFL-Data-Analysis

The relevant raw source files are in:
- `AFL-Data-Analysis/data/matches/`

For this assignment, the files used were:
- `matches_2010.csv` through `matches_2024.csv`

These files are copied into:
- `dataset_a_matches_2010_2024/`

### Why cleaning was needed
The raw match files are stored in a match-level format. Each row represents a single match, with separate columns for:
- `team_1_team_name`
- `team_2_team_name`
- venue
- date
- final goals/behinds for both teams

This raw structure is not ideal for the assignment because the charts need either:
- one row per **team-game**, or
- one row per **team-season**

The raw files also do not directly include the assignment-ready fields such as:
- `State`
- `Game_Type`
- `Win`
- `Win_Pct`
- `Home_Win_Pct`
- `Away_Win_Pct`
- `Venue_City`
- `Month`

### Cleaning / transformation steps used
A cleaned version of Dataset A was created in:
- `cleaned_dataset_a/`

#### File 1: `dataset_a_team_games_2010_2024.csv`
This file was built by converting each raw match row into **two rows**:
- one row for the home team
- one row for the away team

This produced a team-game format that is much more suitable for Tableau.

The following transformations were applied:

1. **Restricted the date range**
   - Only seasons from **2010 to 2024** were used, matching the assignment suggestion.

2. **Split each match into two rows**
   - `team_1_team_name` became the `Team` in a `Home` row
   - `team_2_team_name` became the `Team` in an `Away` row

3. **Calculated final scores**
   - Final score = goals × 6 + behinds
   - This was done for both teams using the raw final goals/behinds columns.

4. **Created a win indicator**
   - `Win = 1` if the team won
   - `Win = 0` if the team lost or drew
   - A separate `Result` field was also created with `W`, `L`, or `D`

5. **Created `Game_Type`**
   - The home team row was labelled `Home`
   - The away team row was labelled `Away`

6. **Created `Month` from the match date**
   - The raw match date was parsed and converted to month name (e.g. March, April)

7. **Mapped club to state**
   - `State` was added manually using a club-to-state lookup
   - Example: West Coast → WA, Brisbane Lions → QLD, Carlton → VIC

8. **Mapped venue to city**
   - A manual venue-to-city mapping was created
   - Example: `M.C.G.` → Melbourne, `Gabba` → Brisbane, `Adelaide Oval` → Adelaide
   - This was necessary so the dataset could later connect to distance and climate data

9. **Removed incomplete rows**
   - One blank/incomplete source row was skipped and logged in `skipped_rows.txt`

#### File 2: `dataset_a_team_season_summary_2010_2024.csv`
This file was created by aggregating the team-game table up to **one row per team-season**.

The following fields were calculated:
- `Home_Wins`
- `Home_Losses`
- `Away_Wins`
- `Away_Losses`
- `Total_Wins`
- `Total_Games`
- `Win_Pct = Total_Wins / Total_Games × 100`
- `Home_Win_Pct = Home_Wins / Home games × 100`
- `Away_Win_Pct = Away_Wins / Away games × 100`

### Why this cleaned Dataset A is useful
This cleaned structure is much more suitable for the assignment because it supports multiple charts directly:
- Chart 2: state-based win/loss comparison
- Chart 3: home vs away win percentage dumbbell chart
- Chart 5: climate-split home/away win analysis
- Chart 1: as the foundation for travel calculations when joined with Dataset B

---

## Dataset B — City-to-City Distances

### Source
The assignment brief describes Dataset B as a **small manual CSV** based on:
- Google Maps or known AFL city distances

To create a reusable and consistent version quickly, Dataset B was built using **approximate city-to-city great-circle distances** based on the latitude/longitude of each city.

This means the dataset is not scraped from a single downloadable source. Instead, it is a derived lookup table created specifically for the visualisation.

### File created
Dataset B is stored in:
- `dataset_b_and_chart1_ready/dataset_b_city_distances.csv`

### Cities included
The following cities were included because they appear in AFL venues across the cleaned match dataset or are plausible host cities:
- Melbourne
- Geelong
- Perth
- Brisbane
- Adelaide
- Sydney
- Hobart
- Gold Coast
- Canberra
- Launceston
- Darwin
- Alice Springs
- Cairns
- Townsville
- Ballarat
- Shanghai
- Wellington

### How the distance values were created
1. A latitude/longitude coordinate was assigned to each city.
2. The haversine formula was used to calculate approximate straight-line distance between origin and destination.
3. Two distance fields were created:
   - `Distance_KM_One_Way`
   - `Distance_KM_Return = Distance_KM_One_Way × 2`

### Why cleaning / calculation was needed
The assignment requires a distance lookup table that can be joined to match data to calculate season travel totals.

The raw AFL match data does not include:
- club home city
- distance travelled
- any travel-related fields

So Dataset B had to be created as a secondary lookup table.

### Chart 1 derived file
Once Dataset B was created, it was used together with cleaned Dataset A to build:
- `dataset_b_and_chart1_ready/chart1_distance_vs_winpct_ready.csv`

This chart-ready file was created using the following steps:

1. **Assigned a home city to each club**
   - Example: West Coast → Perth, Geelong → Geelong, Sydney → Sydney

2. **Looked at away games only**
   - For each team-season, only rows where `Game_Type = Away` were used for travel calculation

3. **Matched home city to venue city**
   - For each away game, the club's home city was matched to the venue city from cleaned Dataset A

4. **Summed return travel distance across the season**
   - `Total_KM_Travelled` = sum of return distances for all away games in that season

5. **Brought through season performance fields**
   - `Wins`
   - `Games_Played`
   - `Win_Pct`

### Output fields in the Chart 1 file
The final chart-ready file contains:
- `Team`
- `Season`
- `State`
- `Total_KM_Travelled`
- `Wins`
- `Games_Played`
- `Win_Pct`

### Important methodology note
These distances are **approximate travel proxies**, not exact flight paths or exact road distances. For a university visualisation assignment, they are still useful because they:
- are internally consistent
- preserve relative travel burden across clubs
- allow a meaningful comparison of travel vs win rate

---

## Summary

### Source datasets used so far
- **Dataset A raw source:** AFL match CSVs from the `AFL-Data-Analysis` GitHub repository
- **Dataset B source:** manually derived city-distance lookup table using city coordinates

### Cleaned / derived outputs created
- `cleaned_dataset_a/dataset_a_team_games_2010_2024.csv`
- `cleaned_dataset_a/dataset_a_team_season_summary_2010_2024.csv`
- `dataset_b_and_chart1_ready/dataset_b_city_distances.csv`
- `dataset_b_and_chart1_ready/chart1_distance_vs_winpct_ready.csv`
