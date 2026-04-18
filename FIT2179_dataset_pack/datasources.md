# Data Sources and Creation Process

## Overview
This visualisation combines AFL match data, manually prepared venue/familiarity lookups, climate data, and Grand Final summary data. The goal was to build a set of datasets that could support both regular-season analysis and a final structural comparison for the Grand Final.

## Main data sources used

### 1. AFL match results (2010–2024)
**Source:** AFL-Data-Analysis GitHub repository (which uses AFL Tables data as the underlying source)
- GitHub repo: https://github.com/akareen/AFL-Data-Analysis
- Relevant raw files: match CSVs for 2010 to 2024

**Author / provider:** akareen / AFL-Data-Analysis, based on AFL Tables source data

**Why it was used:**
This is the core dataset for the project. It provides the regular-season match data needed to test whether home-ground advantage exists and whether it varies by club, venue, travel burden, and context.

**Creation / preparation process:**
The raw match-level CSVs were cleaned into two main derived datasets:
- `dataset_a_team_games_2010_2024.csv` — one row per team-game
- `dataset_a_team_season_summary_2010_2024.csv` — one row per team-season

Additional derived outputs were also created from this source, including chart-ready travel and familiarity datasets.

---

### 2. Climate data for AFL host cities
**Source:** Australian Bureau of Meteorology (BOM)
- BOM climate data pages: http://www.bom.gov.au/climate/data/

**Author / provider:** Bureau of Meteorology

**Why it was used:**
This dataset was used to test whether environmental familiarity, particularly temperature and rainfall differences between a team’s home city and the match venue, might help explain home-ground advantage.

**Creation / preparation process:**
Monthly climate statistics for selected AFL host cities from March to September were collected and entered into:
- `dataset_c_bom_climate_7cities_march_to_september.csv`

To support the final climate chart, a pre-joined chart-ready file was also created:
- `chart9_climate_match_ready.csv`

This file combines team-game rows with venue climate, home-city climate, and climate difference measures.

---

### 3. Grand Final summary data (1990–2024)
**Source:** AFL Tables and supporting manual classification
- AFL Tables Grand Finals: http://afltables.com/afl/teams/allteams/gfgames.html
- AFL Tables ladders: http://afltables.com/afl/seas/ladders/laddersyby.html

**Author / provider:** AFL Tables, with additional manual classification for the project

**Why it was used:**
This dataset supports the final section of the visualisation, which tests whether familiarity may become structural in the Grand Final.

**Creation / preparation process:**
A manually completed Grand Final summary table was created:
- `dataset_d_grand_final_summary_1990_2024.csv`

This includes winner, runner-up, venue, margin, ladder positions, Victorian/interstate classification, and MCG familiarity fields.

A second participant-level file was created for expected-versus-actual comparisons:
- `dataset_d_grand_final_participants_1990_2024.csv`

This file contains two rows per Grand Final, one for each participant, so participant composition can be compared against winner composition.

---

## Derived / chart-ready datasets used in the visualisation
The final Tableau story uses these prepared datasets:
- `chart1_distance_vs_winpct_ready.csv`
- `dataset_a_team_games_2010_2024.csv`
- `dataset_a_team_season_summary_2010_2024.csv`
- `chart9_climate_match_ready.csv`
- `dataset_d_grand_final_summary_1990_2024.csv`
- `dataset_d_grand_final_participants_1990_2024.csv`

## Relevance
These datasets were chosen because together they support all parts of the final story:
- proving home-ground advantage exists
- testing travel and climate explanations
- showing that venue familiarity is the clearest mechanism
- comparing expected and actual Grand Final outcomes to evaluate structural bias

## Notes on creation process
Some small helper datasets and lookup tables were created during preparation, such as home-city mappings and participant-level Grand Final tables. These were used only to make the public source data analysis-ready for Tableau and to support comparisons that were not directly available in the raw data.