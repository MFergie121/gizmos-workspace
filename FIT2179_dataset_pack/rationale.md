# Rationale: What / Why / How

## Why this visualisation was designed this way
The visualisation was designed as a **story-driven Tableau piece** rather than an expert exploration tool. The aim was to help a general Australian audience understand not only whether home-ground advantage exists in the AFL, but also which explanations are supported most clearly by the data.

The final story is structured in four stages:
1. show that home-ground advantage exists
2. test common explanations such as travel and climate
3. show that venue familiarity is the clearest mechanism
4. test whether Grand Final outcomes suggest that familiarity becomes structural

This narrative structure was chosen so the viewer can move from broad proof to explanation and finally to a stronger evaluative conclusion.

## Why these idioms were chosen

### Bar charts
Bar charts were used for simple comparisons where the audience needs to compare proportions or category values quickly, such as home vs away win rates and expected vs actual Grand Final shares. They are familiar, readable, and appropriate for a general audience.

### Line chart
A line chart was used to show the home vs away pattern over time because the task is to see whether the effect remains visible across seasons. This idiom makes temporal continuity easy to read.

### Dumbbell chart
A dumbbell chart was used to compare each club’s home and away win rates. This idiom is effective because it shows both values and the gap between them at the same time, making club-level variation easy to see.

### Scatter plot
A scatter plot was used for travel distance vs performance because it is the most direct way to test whether a relationship exists. The addition of a trend line helps viewers assess whether travel burden appears strongly associated with win rate.

### Heatmap / matrix
Heatmaps were used for venue-based and climate-based comparisons. For the familiarity section, the venue heatmap was made more analytical by comparing venue performance against each team’s overall baseline rather than simply showing raw home win rate. This helps distinguish a genuinely strong venue effect from a team simply being strong overall.

### Pie charts
Pie charts were used in the final dashboard to compare **expected** participant shares with **actual** winner shares for Victorian clubs and MCG-familiar clubs. In this case, the task is composition comparison rather than trend analysis, so the pie format is acceptable and easy for a broad audience to interpret when used in direct side-by-side pairs.

## How the visualisation helps users achieve their tasks
The visualisation is designed to support a few clear user tasks:
- determine whether home-ground advantage exists in the AFL
- compare possible explanations for the effect
- identify which mechanism appears strongest
- judge whether the Grand Final structure appears neutral or familiarity-biased

The visualisation supports these tasks by using a logical sequence of dashboards and by pairing each dashboard with concise explanatory text. Rather than overwhelming the viewer with all variables at once, each section isolates one part of the argument.

## Special features / custom-built elements
Several parts of the visualisation required derived data and custom preparation beyond simple drag-and-drop Tableau views:
- match-level AFL data was transformed into team-game and team-season structures
- travel distance was calculated using a city-distance lookup and summarised to team-season level
- climate comparison required a pre-joined chart-ready dataset containing venue climate, home-city climate, and difference measures
- the familiarity heatmap compares venue performance against team overall performance rather than only showing raw venue win rate
- expected-versus-actual Grand Final pie charts required a participant-level Grand Final dataset with two rows per Grand Final, allowing participant composition to be compared directly against winner composition

These custom-built elements were chosen to make the visualisation answer more meaningful questions than the raw source tables could support directly.

## Design principles used
The visualisation applies the design principles discussed in the unit by:
- using a clear narrative sequence
- keeping chart titles question-based or insight-based
- using colour consistently across related categories
- reducing clutter where possible
- using readable typography and short explanatory text
- prioritising communication and storytelling over exploratory complexity

Overall, the design choices were made to ensure that the visualisation remains accessible to a broad Australian audience while still supporting a clear and evidence-based argument.