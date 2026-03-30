Dataset D — Grand Final Summary

This file contains one row per AFL Grand Final from 1990 to 2024.

Output file:
- dataset_d_grand_final_summary_1990_2024.csv

Column notes:
- Winner_State: manual club-state classification
- Winner_Home_Ground: primary home ground used as a simple proxy for the era
- MCG_Tenant: whether the winner was an MCG home-ground club in that period
- Higher_Ranked_Won: Yes if Winner_Ladder_Pos < Runner_Up_Ladder_Pos
- Winner_Victorian / Runner_Up_Victorian: derived from club state
- Matchup_Type: Vic vs Vic | Vic vs Interstate | Interstate vs Interstate
- Winner_Category: Victorian Winner | Interstate Winner | COVID Neutral Venue

Special cases:
- 2020 Grand Final venue: Gabba
- 2021 Grand Final venue: Perth Stadium
- These are flagged as COVID Neutral Venue in Winner_Category
