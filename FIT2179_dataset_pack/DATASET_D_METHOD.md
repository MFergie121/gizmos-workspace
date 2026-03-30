# Dataset D Method

## Source intent from the assignment brief
Dataset D is the small manual Grand Final summary table used for:
- Chart 6 — Grand Final Winners — MCG Home Ground Highlight
- Chart 7 — Grand Final Timeline — Victorian vs Non-Victorian Winners

The brief points to:
- AFL Tables grand final pages
- AFL Tables ladder pages
- Wikipedia for context / special cases

## How this dataset was built
A completed CSV was created with one row per Grand Final from 1990 to 2024.

### Base factual fields entered
For each Grand Final, the following base fields were filled:
- Year
- Winner
- Runner_Up
- Venue
- Margin
- Winner_Ladder_Pos
- Runner_Up_Ladder_Pos

### Manual classification fields added
The following fields were manually assigned based on club and venue context:
- Winner_State
- Winner_Home_Ground
- MCG_Tenant

### Derived fields calculated
The following fields were derived from the base values:
- Higher_Ranked_Won
  - Yes if the winner finished higher on the ladder than the runner-up
- Winner_Victorian
  - Yes if Winner_State = VIC, otherwise No
- Runner_Up_Victorian
  - Yes if runner-up club is Victorian, otherwise No
- Matchup_Type
  - Vic vs Vic
  - Vic vs Interstate
  - Interstate vs Interstate
- Winner_Category
  - Victorian Winner
  - Interstate Winner
  - COVID Neutral Venue (used for 2020 and 2021)

## Important assumptions
- Winner_Home_Ground is treated as a practical storytelling field, not a perfect season-by-season legal tenancy record.
- MCG_Tenant is simplified to whether the club was meaningfully MCG-based in that era.
- 2020 and 2021 are flagged separately because the Grand Finals were not played at the MCG.

## Output location
- dataset_d_ready/dataset_d_grand_final_summary_1990_2024.csv
