/**
 * 主题资源模拟数据
 */

export default {
  home: [
    {
      // 类型：启动环节
      type: 'boot',
      // 场景数据：启动页场景来自主题数据
      scene: {
        background: './static/theme/scene-background.png',
        foreground: './static/theme/scene-foreground.png',
      },
      src: {
        // 课件课序
        index: 'K1-119',
        // 课时标题
        title: 'Family',
      },
    },
  ],
  warmup: [
    {
      // 类型：视频环节
      type: 'television',
      scene: {
        background: './static/course/television/background.png',
        foreground: '',
      },
      src: {
        video: './static/course/television/kids.mp4',
      },
    },
  ],
  learn: [
    {
      type: 'teaching',
      mode: 1,
      scene: {
        background: './static/course/teaching01/background.png',
        foreground: '',
      },
      // 模式一，一张卡片多个文字，卡片和文字都是可选
      src: {
        card: './static/course/teaching02/sister.png',

        texts: ['sister'],
      },
    },
    {
      type: 'teaching',
      mode: 2,
      scene: {
        background: './static/course/teaching02/background.png',
        foreground: '',
      },
      // 模式二，卡片文字一对一
      src: {
        cards: [
          {
            url: './static/course/teaching02/sister.png',
            text: 'sister',
          },
          {
            url: './static/course/teaching02/brother.png',
            text: 'brother',
          },
          {
            url: './static/course/teaching02/mom.png',
            text: 'mom',
          },
          {
            url: './static/course/teaching02/dad.png',
            text: 'dad',
          },
        ],
      },
    },
  ],
  game: [
    {
      // 类型：闪卡环节，目前有四种模式
      type: 'flashcard',
      // 模式一
      mode: 1,
      scene: {
        background: './static/theme/card-background.png',
        foreground: '',
      },
      // 模式一：四张有可带文字的卡牌按照投票排名顺序翻转
      src: {
        cards: [
          {
            url: './static/course/teaching02/mom.png',
            text: 'mom',
          },
          {
            url: './static/course/teaching02/dad.png',
            text: 'dad',
          },
          {
            url: './static/course/teaching02/brother.png',
            text: 'brother',
          },
          {
            url: './static/course/teaching02/sister.png',
            text: 'sister',
          },
        ],
      },
    },
    {
      type: 'flashcard',
      mode: 2,
      scene: {
        background: './static/theme/card-background.png',
        foreground: '',
      },
      // 模式二：随机生成三张题目干扰项卡牌和选项干扰项卡牌
      src: {
        // 正确答案
        answer: {
          select: 'D',
          url: './static/course/teaching02/sister.png',
        },
        // 题目
        topic: [
          './static/course/card02/disturb/girl.png',
          './static/course/card02/disturb/hello.png',
          './static/course/card02/disturb/yinliao.png',
        ],
        // 选项
        options: [
          './static/course/card02/disturb/boy.png',
          './static/course/card02/disturb/mittens.png',
          './static/course/card02/disturb/hat.png',
        ],
      },
    },
    {
      type: 'flashcard',
      mode: 3,
      scene: {
        background: './static/theme/card-background.png',
        foreground: '',
      },
      // 模式三：根据播放的音乐选择对应的正确卡牌
      src: {
        answer: {
          select: 'A',
          url: './static/course/teaching02/brother.png',
          text: 'brother',
        },
        topic: {
          audio: './static/course/card03/brother.mp3',
        },
        options: [
          {
            url: './static/course/teaching02/mom.png',
            text: 'mom',
          },
          {
            url: './static/course/teaching02/sister.png',
            text: 'sister',
          },
          {
            url: './static/course/teaching02/dad.png',
            text: 'dad',
          },
        ],
      },
    },
    {
      type: 'flashcard',
      mode: 4,
      scene: {
        background: './static/theme/card-background.png',
        foreground: '',
      },
      // 模式四：题目是一张自定义图片，根据图片选择选项
      src: {
        answer: {
          select: 'D',
          url: './static/course/teaching02/mom.png',
        },
        topic: [
          './static/course/card04/mom1.png',
        ],
        options: [
          {
            url: './static/course/teaching02/brother.png',
          },
          {
            url: './static/course/teaching02/dad.png',
          },
          {
            url: './static/course/teaching02/sister.png',
          },
        ],
      },
    },
  ],
  summary: [
    {
      type: 'teaching',
      mode: 1,
      scene: {
        background: './static/course/teaching01/background.png',
        foreground: '',
      },
      // 模式一，一张卡片多个文字，卡片和文字都是可选
      src: {
        card: './static/course/teaching02/dad.png',

        texts: ['dad'],
      },
    },
    {
      type: 'teaching',
      mode: 1,
      scene: {
        background: './static/course/teaching01/background.png',
        foreground: '',
      },
      // 模式一，一张卡片多个文字，卡片和文字都是可选
      src: {
        card: './static/course/teaching02/dad.png',

        texts: [
          "Who's he?",
          "He's my dad.",
        ],
      },
    },
  ],
  celebrate: [
    {
      // 结算环节
      type: 'celebrate',
      // 来自主题数据
      scene: {
        background: './static/theme/celebrate-background.png',
        foreground: '',
      },
    },
  ],
};

