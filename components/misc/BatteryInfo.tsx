import React from 'react';

const timeChart: any = {
  '00': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/sleeping-face.gif',
    text: 'Fast Asleep ...zzz...'
  },
  '01': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/sleeping-face.gif',
    text: 'Fast Asleep ...zzz...'
  },
  '02': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/sleeping-face.gif',
    text: 'Fast Asleep ...zzz...'
  },
  '03': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/sleeping-face.gif',
    text: 'Fast Asleep ...zzz...'
  },
  '04': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/sleeping-face.gif',
    text: 'Fast Asleep ...zzz...'
  },
  '05': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/sleeping-face.gif',
    text: 'Fast Asleep ...zzz...'
  },
  '06': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/sleeping-face.gif',
    text: 'Fast Asleep ...zzz...'
  },
  '07': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/face-with-hand-over-mouth.gif',
    text: 'Just woke up ...yawn...'
  },
  '08': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/face-savoring-food.gif',
    text: 'Breakfast ...yummy...'
  },
  '09': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/thinking-face-1.gif',
    text: 'Work Session Meetings ...'
  },
  '10': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/keyboard.gif',
    text: 'Work ...click..type...'
  },
  '11': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/light-bulb.gif',
    text: 'Brainstorm ...think...'
  },
  '12': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/grinning-face-with-sweat-1.gif',
    text: 'Heat ...oof...'
  },
  '13': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/face-savoring-food.gif',
    text: 'Lunch ...yummy...'
  },
  '14': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/keyboard.gif',
    text: 'Back to work ...tap...'
  },
  '15': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/keyboard.gif',
    text: 'Still working ...tap...'
  },
  '16': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/keyboard.gif',
    text: 'Still working ...tap...'
  },
  '17': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/face-with-hand-over-mouth.gif',
    text: 'Exhausted ...whew...'
  },
  '18': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2021/02/Video-Game.gif',
    text: 'Games ...hurrah...'
  },
  '19': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/Star-Struck.gif',
    text: 'Youtube ...cool...'
  },
  '20': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2021/02/Video-Game.gif',
    text: 'Games ...hurrah...'
  },
  '21': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/face-savoring-food.gif',
    text: 'Dinner ...yummy...'
  },
  '22': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/face-with-hand-over-mouth.gif',
    text: 'Sleepy ...yawn...'
  },
  '23': {
    gif: 'https://cdn-0.emojis.wiki/wp-content/uploads/2020/12/sleeping-face.gif',
    text: 'Fast Asleep ...zzz...'
  }
}

const BatteryInfo = () => {
  const getDetails = () => {
    const date = new Date();
    return timeChart[date.getHours().toString()];
  }

  return <div></div>

  // return (<Tooltip
  //   html={<Image
  //     src={getDetails().gif}
  //     alt="What Am i doing"
  //   />}
  //   text={getDetails().text}
  // >
  //   <div className="cursor-pointer">What Am I doing...</div>
  // </Tooltip>)
}

export default BatteryInfo;