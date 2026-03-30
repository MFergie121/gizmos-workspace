# FIT2179 dataset pack

Built from the assignment requirements doc.

## Included

### 1) Downloaded source repo
- `AFL-Data-Analysis/`
- Contains AFL match CSVs in `AFL-Data-Analysis/data/matches/`
- The most relevant files for this assignment are the match CSVs from 2010–2024.

### 2) Manual templates
In `manual_templates/`:
- `dataset_b_city_distances_template.csv`
- `dataset_c_bom_climate_template.csv`
- `dataset_d_grand_final_summary_template.csv`

### 3) Notes
In `notes/`:
- `bom_station_ids.txt`

## Best files to use

### Dataset A — AFL Match Results
Use:
- `AFL-Data-Analysis/data/matches/matches_2010.csv`
- ... through ...
- `AFL-Data-Analysis/data/matches/matches_2024.csv`

These will likely need cleaning/reshaping for Tableau because the raw files are match-level and use team_1 / team_2 columns.

### Dataset B — City-to-City Distances
Use:
- `manual_templates/dataset_b_city_distances_template.csv`

Fill in one-way and return distances manually.

### Dataset C — BOM Climate Data
Use:
- `manual_templates/dataset_c_bom_climate_template.csv`

Fill in March–September monthly climate values from BOM for the listed stations.

### Dataset D — Grand Final Summary
Use:
- `manual_templates/dataset_d_grand_final_summary_template.csv`

Fill manually from AFL Tables / Wikipedia for 1990–2024.

## Source links from assignment doc
- GitHub AFL data repo: https://github.com/akareen/AFL-Data-Analysis
- AFL Tables home/away records: http://afltables.com/afl/teams/allteams/overall_wl.html
- AFL Tables grand finals: http://afltables.com/afl/teams/allteams/gfgames.html
- AFL Tables ladders: http://afltables.com/afl/seas/ladders/laddersyby.html
- BOM climate data: http://www.bom.gov.au/climate/data/
- BOM station index: http://www.bom.gov.au/climate/averages/tables/ca_site_file_names.shtml
