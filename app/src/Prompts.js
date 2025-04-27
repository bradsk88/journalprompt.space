const prompts = [
  // Please feel free to suggest more prompts here. Sources are encouraged!

  // Source: Kate Arends
  // https://witanddelight.com/2020/03/20-journaling-prompts-i-swear-by-to-get-you-out-of-your-head/
  `What do I know to be true that I didn't know a year ago?`,
  `What distractions get in the way of being my most productive?`,
  `When do I feel most in tune with myself?`,
  `If someone described me, what would they say?`,
  `What can wait until next week?`,
  `How does every part of my body feel in this moment?`,
  `What emotions am I holding on to?`,
  `How can I detach or neutralize this emotion?`,
  `Why am I doing X?`,
  `Why am I feeling this way?`,
  `What is causing these feelings?`,
  `Have I tried to take my ego out of the situation?`,
  `How can I detach my emotions from the behavior of others?`,
  `Did I use healthy boundaries before I began feeling this way?`,
  `What hurts right now? How can I find relief?`,
  `When I look in the mirror, what do I see?`,
  `What are the things in my home that are the most "me"?`,
  `What am I doing right now?`,
  `What happened before I felt a shift in my mood?`,
  `Write down an entire list of what you are worried about. Star the items that you know are 100% true and not solely a feeling.`,

  // Source: Eric Sangerma
  // https://medium.com/the-happy-human/the-ultimate-list-of-self-discovery-journaling-prompts-8e3296b0b662
  `What is one of your earliest memories?`,
  `What is something you regret doing?`,
  `What is something you regret not doing?`,
  `Think about something you wish you had known 15 years ago. If you could go, back and give yourself the advice you needed at the time, how would your life change?`,
  `Write a letter to yourself five years ago.`,
  `Write a letter to yourself five years from now.`,
  `Complete this sentence and then keep writing: "I got where I am today because, I am ____."`,
  `Imagine a crystal ball that can give you the answer to one question about your future. What would you ask? What would you hope to see?`,
  `Describe 5 nice things that happened to you in the past week. Then, list 5 nice things you will do for others next week.`,
  `Complete this sentence and then keep writing: “Tomorrow, I’m finally going to ____.”`,
  `What kind of impression do you tend to leave on people in a work setting?`,
  `Describe your perfect job, and be honest. (Assume you’re set for life financially, so “no job at all” is an option too.)`,
  `Over the past week, what did you do to bring yourself closer to reaching your career goals? What can you do over the coming week to achieve further progress?`,
  `Does the work you do right now let you build on your strengths? Do you have any strengths and talents that you’re not using at the moment?`,
  `What was your first job, and how did you grow since then?`,
  `Who or what gives you inspiration in your professional life?`,
  `Within the next year, how can you improve your career?`,
  `What can you do to unleash or further develop your creativity?`,
  `How would you improve your industry if you had more influence?`,
  `What’s one thing you definitely want to accomplish before you retire?`,
  `Think about a relationship you need to improve in your life. What went wrong, and what can you do to fix it?`,
  `Name three people you admire. Do they know you admire them? How did they change your life?`,
  `What do people like about you? Are these the same things you like about yourself?`,
  `Write a letter to someone who has always been there for you.`,
  `Write a letter to someone you’ve lost, whether they’ve died or simply drifted away from your life. What do you have left to tell them?`,
  `Do the people in your life understand you well? Is there something you wish they knew about you that you’ve kept hidden so far? Conversely, is there anyone who understands you better than you know yourself?`,
  `Talk about the ways you’re different from your parents. How did it impact your relationship with them?`,
  `Complete this sentence and then keep writing: “I owe an apology to ____.”`,
  `What is an assumption people tend to make about you?`,
  `What do you value most in a friend?`,
  `What are your main coping mechanisms? Are they serving you well?`,
  `Imagine a world where you could do everything you like without being judged by the people around you. Would anything change in your life?`,
  `Salvador Dalí said: “Have no fear of perfection — you’ll never reach it.” How does that sentence make you feel?`,
  `Describe a mistake you made recently, big or small. How did you deal with it?`,
  `Pick one thing that’s standing in the way of your dreams. What could you achieve if that one thing was removed from your life?`,
  `How much do you worry about money?`,
  `Complete this sentence and then keep writing: “I need to accept that ____.”`,
  `How do you respond to a crisis?`,
  `Talk about something that scares you.`,
  `Resilience is more than a trait you are born with — it is a skill you can develop intentionally. What made you more resilient in life? What can you do today to prepare yourself for future letdowns?`,
  `Talk about your diet. Are you happy with it or do you want to change something about it? What is your relationship to food — what makes you happy about eating, what causes you stress about it?`,
  `Do you get enough sleep? Do you usually wake up well-rested?`,
  `If you use social media, describe the ways each platform impacts your day. What are the upsides and downsides of spending time online? If you don’t use any social media, do you ever feel like it’s missing from your life?`,
  `Write a letter to your body. It’s up to you to decide on the tone — is it a letter of congratulations, an apology, a letter of complaint? When you reread it, does it feel like a letter to a friend?`,
  `Describe your morning in detail. Do you have a consistent morning routine? Is there anything you could do in the mornings to make your day easier?`,
  `Complete this sentence and then keep writing: “I spend too much time on ____.”`,
  `How often do you work out, and how does it make you feel?`,
  `How much time do you spend sitting each day? Do you take regular breaks? If you have a desk job, are you taking any measures to prevent the health problems that come with staring at the screen for too long? (For example, posture exercises, regular stretching, ergonomic furniture, etc.)`,
  `Describe the last time you took a break from work. What are you hoping to do next time you take a day off?`,
  `How often do you visit your doctor and dentist? Are there any checkups you’ve been neglecting? Do you have aches and pains you’ve been trying to ignore?`,
  `How are you feeling today?`,
  `What are your core values? Are you living your life in accordance with them?`,
  `Complete this sentence and then keep writing: “I am courageous because I ____.”`,
  `How do you handle disagreements and conflicts? What is your arguing style? How do you handle losing an argument?`,
  `Being overly generous and being excessively critical can both cause problems in life. Do you tend to fall into one (or both) of those extremes? Which do you think is the better way to approach yourself or others?`,
  `Try some free-association! Use one or more of the following words: rain, hope, deadline, silence. Write down whatever comes to mind.`,
  `How do you tend to handle uncertain situations?`,
  `Imagine a biography written about you. What would the title and tagline be? Which parts would be the most fun to read? What kind of people would appreciate reading it the most?`,
  `Compose a bucket list.`,
  `Do you feel your life is in balance? Is there something you should be doing more (or less) of?`,
  `When you’re in a bad mood, what can you do to turn your day around?`,
  `What makes you happy about the place you live?`,
  `Describe an event that changed you for the better.`,
  `Who are the people you can relax with, and how do you feel when you’ve reached a state of total relaxation? When was the last time you were truly relaxed?`,
  `Talk about something you grew out of that meant a lot to you at the time.`,
  `What is the most beautiful place you’ve ever visited? How did it make you feel?`,
  `What’s going great in your life right now?`,
  `Talk about a book or movie that had a positive impact on your life. How did it change you?`,
  `What would a perfect day look like for you?`,
  `Recall an occasion someone was kind to you when you weren’t expecting it.`,

  // Source: Brad Johnson
  "What are the most important political issues to you right now? Have the changed in recent years?",
  "What is your relationship to physical fitness right now?",
  "What are some challenges you are dealing with at work?",
  "What are your career aspirations right now?",
  "What is a food that you recenty discovered?",
  "If you could spend more of your time doing something, what would that thing be?",
  "What major life events are happening in the next six months? How do you feel about them?"
];

export class PromptGenerator {

  generate() {
    const r = Math.random() * (prompts.length - 1);
    const i = Math.floor(r);
    console.log('i is', i);
    return prompts[i];
  }

}
