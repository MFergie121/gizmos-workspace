# Submission Summary — Domain, Who, What, Why, How

## Domain
This visualisation explores **home-ground advantage in the Australian Football League (AFL)**. It investigates whether home-ground advantage actually exists, which factors best explain it, and whether familiarity with the MCG may become a structural advantage in the AFL Grand Final.

## Who
The target audience is the **average Australian**, especially someone with a general awareness of AFL but no specialist knowledge of statistics or sports analytics. The visualisation is designed to be understandable through familiar chart types, short explanatory text, and plain-English narrative framing.

## Why
Home-ground advantage is one of the most common assumptions in sport, but it is often discussed casually rather than tested carefully. In the AFL, possible explanations include travel burden, venue familiarity, climate difference, and the long-standing use of the MCG for the Grand Final. This makes the topic suitable for data visualisation because data can be used not only to show whether an advantage exists, but also to compare competing explanations and identify which one is most convincing.

## What
The visualisation combines several real-world AFL-related datasets:
- AFL regular-season match data (2010–2024), based on AFL Tables data through the AFL-Data-Analysis GitHub repository
- Bureau of Meteorology climate data for selected AFL host cities
- a manually prepared Grand Final summary dataset (1990–2024)
- a participant-level Grand Final dataset created for expected-versus-actual comparison
- chart-ready derived datasets for travel, climate difference, and venue/familiarity analysis

These datasets were chosen because together they support the full story: proving home-ground advantage exists, testing travel and climate explanations, identifying familiarity as the clearest mechanism, and evaluating whether the Grand Final structure appears neutral.

## How
The visualisation is built as a **multi-dashboard Tableau story**. Each dashboard answers a specific question and moves the viewer through the argument.

- **Dashboard 1** establishes that home-ground advantage exists using bar charts, a time-series line chart, and a club-level dumbbell chart.
- **Dashboard 2** tests whether travel and climate explain the pattern using a scatter plot, grouped bar charts, and environmental comparison charts.
- **Dashboard 3** argues that familiarity is the clearest explanation using a true-home vs shared-home comparison and a venue-based heatmap comparing venue performance against each club’s overall baseline.
- **Dashboard 4** compares expected and actual Grand Final winner shares using paired pie charts to test whether MCG-familiar and Victorian clubs win more often than their share of participation would suggest.

The chosen idioms were selected to match user tasks such as comparison, trend identification, and composition analysis. Several custom-built elements were used, including derived team-game and team-season datasets, climate comparison tables, a participant-level Grand Final dataset, and a fortress heatmap based on performance above each team’s normal level rather than raw home win rate.

## Summary
Overall, the visualisation argues that **home-ground advantage exists in the AFL, but the clearest explanation in this project is venue familiarity rather than travel or broad weather effects. At Grand Final level, that familiarity may become structural.**