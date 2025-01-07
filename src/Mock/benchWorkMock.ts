import type {
  InteractionHistoryData,
  NotificationsData,
} from '@/views/main/dashboard/workbench/type'

export const benchWorkInteractionDataArray: Array<InteractionHistoryData> = [
  {
    date: 'Sept 15',
    groupName: 'shuadan xiaozu',
    description: 'shaudan',
    money: 11250,
    groupMember: [
      'src/assets/img/avatar.jpg',
      'src/assets/img/avatar02.jpg',
      'src/assets/img/avatar04.jpg',
    ],
  },
  {
    date: 'Sept 20',
    groupName: 'Third Deal',
    description: 'Most useful',
    money: 21300,
    groupMember: [
      'src/assets/img/avatar.jpg',
      'src/assets/img/avatar01.jpg',
      'src/assets/img/avatar03.jpg',
    ],
  },
  {
    date: 'Sept 25',
    groupName: 'Absolute SuccessDeal',
    description: 'shaudan',
    money: 11250,
    groupMember: [
      'src/assets/img/avatar.jpg',
      'src/assets/img/avatar02.jpg',
      'src/assets/img/avatar04.jpg',
    ],
  },
  {
    date: 'Oct 07',
    groupName: 'Royal package',
    description: 'Oportunity',
    money: 4160,
    groupMember: ['src/assets/img/avatar.jpg'],
  },
  {
    date: 'Oct 20',
    groupName: 'Adaptive',
    description: 'Business Services',
    money: 3140,
    groupMember: [
      'src/assets/img/avatar.jpg',
      'src/assets/img/avatar01.jpg',
      'src/assets/img/avatar04.jpg',
    ],
  },
  {
    date: 'Oct 24',
    groupName: 'Second Deal',
    description: 'Common Service',
    money: 12350,
    groupMember: ['src/assets/img/avatar.jpg', 'src/assets/img/avatar04.jpg'],
  },
]

export const benchWorkNotificationsDataArray: Array<NotificationsData> = [
  {
    img: 'src/assets/img/avatar01.jpg',
    description: 'Jennifer Campbell Invites You to a\n Call: "Personal Development\n Strategies"',
    type: 'Invite',
    time: '30 min ago',
  },
  {
    img: 'src/assets/img/avatar02.jpg',
    description:
      'Sarah Thompson Left a Comment on\n Your Video: "Mastering the Art of  \n Photography"',
    type: 'Invite',
    time: '1 hour ago',
  },
  {
    img: 'src/assets/img/avatar03.jpg',
    description: 'Daniel Turner Watched Your Video: "Cooking with Passion"',
    type: 'Viewing',
    time: '1 day ago',
  },
]
