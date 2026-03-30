# Claude Visualisation Brief — FIT2179

Use this brief as the main narrative and design instruction set for generating the Tableau visualisation.

---

## Project title
**Does Home Ground Advantage Actually Exist in the AFL?**

## Core question
This visualisation investigates whether home ground advantage in the AFL is real, and if so, what actually drives it.

Rather than assuming home ground advantage is just “teams play better at home,” the story breaks the idea into three testable explanations:

1. **Travel burden** — do teams that travel more perform worse?
2. **Climate difference** — do teams gain an edge when opponents travel into very different weather conditions?
3. **Grand Final structural bias** — does the MCG create an unfair advantage for some clubs in the biggest game of the season?

The overall aim is not just to show that home ground advantage exists, but to examine whether it comes from geography, climate, or competition structure.

---

# Overall narrative structure

The visualisation should be told like an argument in **three acts**.

---

## ACT 1 — THE MYTH: Does distance actually matter?

### Narrative purpose
Most people assume that long travel automatically creates disadvantage in the AFL. This act tests that assumption directly.

### Intended insight
Travel matters, but probably not in a simple linear way. Interstate teams often travel more than Victorian clubs, but they do not always perform worse. This suggests that distance alone may not fully explain home ground advantage.

### Emotional tone
Analytical and slightly sceptical.
This act should feel like it is questioning a widely accepted assumption.

### Charts in this act
- **Chart 1 — Distance Travelled vs Win Percentage**
- **Chart 2 — State by State Win/Loss Comparison**
- **Chart 3 — Home Win % vs Away Win % Dumbbell Chart**

### Chart 1 role in the story
**Question:** Do teams that travel more win less?

**Storyline:**
Introduce the popular belief that interstate clubs are disadvantaged because they travel more. Plot total seasonal travel against win percentage to test whether this assumption is actually visible in the data.

**What the viewer should notice:**
- WA and QLD clubs tend to travel much more than Victorian clubs
- the relationship between travel and performance is not clean
- some high-travel teams still perform strongly

**Takeaway:**
Travel burden exists, but it may not be the main explanation for home ground advantage.

### Chart 2 role in the story
**Question:** Does state location shape team performance more broadly?

**Storyline:**
Move from individual team-seasons to state-level patterns. Compare average win performance by state to see whether geography matters in a broader structural sense.

**What the viewer should notice:**
- Victorian clubs benefit from less travel on average
- interstate clubs may still remain competitive despite heavier travel loads
- state-level context helps explain why Chart 1 is messy rather than definitive

**Takeaway:**
Geography affects context, but not all travel disadvantages turn into weaker outcomes.

### Chart 3 role in the story
**Question:** Which clubs actually show the strongest home vs away gap?

**Storyline:**
Shift from broad state averages to club-specific home/away splits. Show the size of each club’s home-ground effect directly.

**What the viewer should notice:**
- some clubs have a very large home vs away gap
- some Victorian MCG-sharing clubs may show relatively small differences
- clubs with distinct home conditions often show bigger home-ground effects

**Takeaway:**
Home ground advantage is real, but it is uneven. Some clubs experience it much more strongly than others.

### End-of-Act-1 conclusion
Travel explains part of the story, but not enough on its own. If home-ground advantage is real, something more than kilometres may be shaping it.

---

## ACT 2 — CLIMATE: Does the weather give some teams an edge?

### Narrative purpose
This act explores whether home-ground advantage is partly environmental. The idea is that teams from hotter, drier, or more stable climates may gain an edge when opponents travel into very different conditions.

### Intended insight
Climate may help explain why some clubs have a stronger home-ground advantage than others, especially in cities with more extreme or distinct conditions.

### Emotional tone
Revealing and explanatory.
This act should feel like the visualisation has found a deeper mechanism.

### Charts in this act
- **Chart 4 — Average Temperature by City & Month Heatmap**
- **Chart 5 — Climate-Split Home/Away Wins**

### Chart 4 role in the story
**Question:** How different are AFL climates across cities and months?

**Storyline:**
Show a heatmap of average temperatures across AFL host cities during the season months. This visual sets up the environmental context for the next chart.

**What the viewer should notice:**
- Perth, Brisbane and Gold Coast are warmer than Melbourne and Hobart in many months
- climate variation is not minor — it is visible and systematic
- travelling teams may face conditions very different from their home environment

**Takeaway:**
AFL teams do not compete in one neutral climate. They move through clearly different environmental conditions across the season.

### Chart 5 role in the story
**Question:** Do teams perform differently when playing in similar vs different climates?

**Storyline:**
Connect match data to climate data. Compare win rates for home and away games when the venue climate is either similar to or different from the team’s usual home climate.

**What the viewer should notice:**
- teams may perform better at home in more climate-distinct environments
- away performance may weaken when climate difference is larger
- climate may help explain why some clubs show stronger home-ground effects than others

**Takeaway:**
Home-ground advantage may not just be about travel. It may also be about environmental familiarity.

### End-of-Act-2 conclusion
Distance alone does not fully explain the pattern. Climate begins to explain why some forms of home advantage are stronger than others.

---

## ACT 3 — THE GRAND FINAL: Is the MCG a structural bias?

### Narrative purpose
This act changes scale from the regular season to the finals system. The question is no longer whether clubs perform better at home, but whether the AFL’s biggest match is structurally tilted toward certain clubs.

### Intended insight
Even if regular-season home advantage is complex, the Grand Final may show a more obvious structural bias because it is usually played at the MCG, which advantages clubs already familiar with that venue.

### Emotional tone
More pointed and evaluative.
This act should feel like the strongest critique in the visualisation.

### Charts in this act
- **Chart 6 — Grand Final Winners with MCG Home Ground Highlight**
- **Chart 7 — Grand Final Timeline — Victorian vs Non-Victorian Winners**

### Chart 6 role in the story
**Question:** How often are Grand Final winners already MCG-familiar clubs?

**Storyline:**
Show Grand Final winners since 1990 and highlight whether the winning club was an MCG tenant or MCG-familiar club. Include annotations for notable examples where highly ranked interstate teams lost at the MCG.

**What the viewer should notice:**
- many winners are Victorian or MCG-based clubs
- some interstate teams won despite the structure, but often against the default conditions
- the venue is not neutral in any meaningful lived sense

**Takeaway:**
At Grand Final level, home-ground familiarity becomes a structural issue, not just a natural sporting pattern.

### Chart 7 role in the story
**Question:** What does the long-term pattern of Grand Final winners reveal?

**Storyline:**
Use a timeline to show whether winners were Victorian clubs, interstate clubs, or special COVID-era exceptions.

**What the viewer should notice:**
- periods of Victorian dominance
- interstate breakthrough periods
- how unusual the neutral-venue COVID years were

**Takeaway:**
The Grand Final venue question is not just symbolic. Over time, it appears tied to repeated structural advantage.

### End-of-Act-3 conclusion
Home-ground advantage in the AFL is not just a feature of crowd support or comfort. In the Grand Final context, it can become embedded in the competition structure itself.

---

# Final conclusion of the full visualisation

The final message of the visualisation should be:

**Home-ground advantage in the AFL does exist, but it is not caused by one single factor.**

- Travel contributes, but does not explain everything
- Climate helps explain why home advantage is stronger for some teams than others
- The Grand Final reveals that venue familiarity can become a structural advantage, not just a natural one

So the answer to the title question is:

**Yes, home-ground advantage exists — but its strongest forms come from a mix of geography, environment, and league structure.**

---

# Design / presentation instructions for Claude

## Tone of the visualisation
- analytical
- clean
- evidence-based
- slightly provocative by the final act
- avoid sounding like fan fiction or tabloid sports commentary

## Desired user experience
The viewer should feel like they are being led through an argument, not just shown disconnected charts.

Each chart should:
- ask a clear question
- answer part of the question
- naturally set up the next chart

## Visual storytelling rules
- keep chart titles question-based or insight-based
- use short annotations, not long paragraphs inside the charts
- use consistent colours where possible
- use colour meaningfully, not decoratively
- preserve a clear visual hierarchy across acts

## Colour logic suggestion
- **State / geography charts:** colour by state
- **Climate charts:** use temperature/intensity colour scales
- **Grand Final charts:** use contrasting colours for Victorian vs Interstate / MCG tenant vs non-tenant

## Annotation guidance
Use annotations sparingly but strategically.

Strong annotation opportunities include:
- teams with huge travel but strong performance
- clubs with unusually large home/away gaps
- extreme climate contrasts (e.g. Perth vs Hobart)
- Grand Finals where the lower-ranked MCG-familiar side beat the higher-ranked interstate side
- 2020 and 2021 as neutral-venue exceptions

---

# Claude handoff instructions

If this brief is passed into Claude alongside the Tableau datasets, Claude should:

1. Treat this as a **three-act explanatory visualisation**
2. Build each chart to serve the narrative role described above
3. Prioritise clarity and storytelling over decorative complexity
4. Keep the final answer focused on the question of **whether home-ground advantage exists and what drives it**
5. Use the chart order exactly as described unless there is a strong narrative reason not to

---

# Suggested chart titles

These can be used directly or adapted slightly.

### Act 1
- **How much does AFL travel really matter?**
- **Do some states start with an advantage?**
- **Which clubs are truly stronger at home?**

### Act 2
- **The AFL does not play in one climate**
- **Does environmental familiarity shape results?**

### Act 3
- **Is the Grand Final really played on neutral ground?**
- **Who has benefited most from the Grand Final structure?**

### Final dashboard / story title
- **Does Home Ground Advantage Actually Exist in the AFL?**

---

# Ultra-short summary for Claude

Build a three-act AFL data story that tests home-ground advantage through travel, climate, and Grand Final venue bias. Show that travel alone does not fully explain team performance, climate helps explain uneven home advantage, and the MCG likely creates a structural advantage in Grand Finals for some clubs.
