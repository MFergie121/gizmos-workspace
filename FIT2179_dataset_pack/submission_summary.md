# Submission Summary — Domain, Who, What, Why, How

## Domain
This visualisation explores **home-ground advantage in the Australian Football League (AFL)**. It investigates whether home-ground advantage actually exists, which factors best explain it, and whether familiarity with the MCG may become a structural advantage in the AFL Grand Final.

## Who
The target audience is the **average Australian**, especially someone with a general awareness of AFL but no specialist knowledge of statistics or sports analytics. The visualisation is designed to be understandable through familiar chart types, short explanatory text, and plain-English narrative framing.

## Why
Home-ground advantage is one of the most common assumptions in sport, but it is often discussed casually rather than tested carefully. In the AFL, possible explanations include travel burden, venue familiarity, climate difference, and the long-standing use of the MCG for the Grand Final. This makes the topic suitable for data visualisation because data can be used not only to show whether an advantage exists, but also to compare competing explanations and identify which one is most convincing.

## What
The visualisation combines several real-world AFL-related datasets from multiple public sources, together with a small number of derived chart-ready datasets prepared for Tableau.

The main regular-season source is **AFL match data from 2010 to 2024**, taken from the AFL-Data-Analysis GitHub repository, which in turn uses AFL Tables data as its underlying source.
- AFL-Data-Analysis GitHub repository: https://github.com/akareen/AFL-Data-Analysis
- AFL Tables home/away and historical AFL data: http://afltables.com/

This dataset provides the core match information needed for the project, including teams, dates, venues, scores, results, and home/away context. It was used because it makes it possible to test whether home-ground advantage exists across the modern AFL era and whether that pattern changes by team, venue, or season.

To make this source suitable for analysis, the match-level data was transformed into two main derived tables:
- a **team-game dataset** with one row per team per match
- a **team-season summary dataset** with one row per team per season

These files support charts such as league-wide home vs away win rate, team-level home vs away comparisons, the familiarity comparison, and the fortress-style venue analysis.

The project also uses **Bureau of Meteorology (BOM) climate data** for selected AFL host cities.
- BOM climate data portal: http://www.bom.gov.au/climate/data/
- BOM station index / station reference tables: http://www.bom.gov.au/climate/averages/tables/ca_site_file_names.shtml

Monthly climate statistics were collected for March to September so that venue conditions could be compared with a team’s usual home conditions. This source was included to test whether environmental unfamiliarity, especially differences in temperature and rainfall, might help explain home-ground advantage.

Because Tableau relationships proved awkward for this comparison, the climate data was also prepared into a **chart-ready climate match dataset**. This file combines team-game rows with venue climate, home-city climate, and difference measures such as temperature difference and rainfall difference. This made it possible to build environmental comparison charts without relying on unstable multi-table relationships inside Tableau.

For the final section of the visualisation, the project uses a **manually prepared AFL Grand Final summary dataset covering 1990 to 2024**. This dataset was assembled from AFL Tables and supporting reference material so that the Grand Final could be analysed separately from the regular season.
- AFL Tables Grand Finals: http://afltables.com/afl/teams/allteams/gfgames.html
- AFL Tables ladders: http://afltables.com/afl/seas/ladders/laddersyby.html

It includes winner, runner-up, venue, margin, ladder positions, club state, and familiarity-related fields such as whether the winning club was an MCG tenant.

A second **participant-level Grand Final dataset** was then created from this summary file, with two rows per Grand Final: one for the winner and one for the runner-up. This participant-level structure was necessary for the final expected-versus-actual comparison. It allows the visualisation to compare the share of Victorian or MCG-familiar clubs among Grand Final participants against the share among actual winners.

Several additional **derived/chart-ready files** were created to support the final Tableau story more cleanly. These include:
- a travel-ready team-season file for the distance vs performance chart
- a climate-ready file for environmental comparison
- a participant-level Grand Final file for expected-versus-actual composition analysis
- helper lookup tables for home-city and familiarity comparisons

These datasets were chosen because together they support the full argument of the visualisation: proving that home-ground advantage exists, testing common explanations such as travel and climate, showing that venue familiarity is the clearest mechanism, and finally evaluating whether Grand Final outcomes suggest that familiarity may become structural.

## How
The visualisation is built as a **multi-dashboard Tableau story**. Each dashboard answers a specific question and moves the viewer through the argument.

- **Dashboard 1** establishes that home-ground advantage exists using bar charts, a time-series line chart, and a club-level dumbbell chart.
- **Dashboard 2** tests whether travel and climate explain the pattern using a scatter plot, grouped bar charts, and environmental comparison charts.
- **Dashboard 3** argues that familiarity is the clearest explanation using a true-home vs shared-home comparison and a venue-based heatmap comparing venue performance against each club’s overall baseline.
- **Dashboard 4** compares expected and actual Grand Final winner shares using paired pie charts to test whether MCG-familiar and Victorian clubs win more often than their share of participation would suggest.

The chosen idioms were selected to match user tasks such as comparison, trend identification, and composition analysis. Several custom-built elements were used, including derived team-game and team-season datasets, climate comparison tables, a participant-level Grand Final dataset, and a fortress heatmap based on performance above each team’s normal level rather than raw home win rate.

## Summary
Overall, the visualisation argues that **home-ground advantage exists in the AFL, but the clearest explanation in this project is venue familiarity rather than travel or broad weather effects. At Grand Final level, that familiarity may become structural.**