import dayjs from 'dayjs';

const FILTER_TYPE = {
  everything: 'Click New Event to create your first point',
  past: 'There are no past events now',
  present: 'There are no present events now',
  future: 'There are no future events now'
};

const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DEFAULT_OFFERS = {
  type: 'taxi',
  offers: [
    {
      id: '96e801da-19f2-415a-aa24-5a915f325a35',
      title: 'Upgrade to a business class',
      price: 190
    },
    {
      id: '729b6025-85de-485a-9a01-e18db921e4b6',
      title: 'Choose the radio station',
      price: 30
    },
    {
      id: '209d6f48-5ac5-4970-bd0d-3dfc4f932ae6',
      title: 'Choose temperature',
      price: 170
    },
    {
      id: 'ba40315d-09e4-4c03-b824-eee045bc5178',
      title: 'Drive quickly, I\'m in a hurry',
      price: 100
    },
    {
      id: '5a360f33-4a66-449a-bef8-707cc7376b2a',
      title: 'Drive slowly',
      price: 110
    }
  ]
};

const DEFAULT_DESTINATION = {
  name: 'Chamonix',
  description: 'Chamonix, is a beautiful city, a true asian pearl, with a beautiful old town.',
  pictures: [
    {
      src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
      description: 'Chamonix embankment'
    },
    {
      src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
      description: 'Chamonix park'
    },
    {
      src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
      description: 'Chamonix kindergarten'
    },
    {
      src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
      description: 'Chamonix biggest supermarket'
    },
    {
      src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
      description: 'Chamonix street market'
    }
  ]
};

const DEFAULT_POINT = {
  type: 'taxi',
  dateFrom: dayjs(),
  dateTo: dayjs().hour(1),
  destination: DEFAULT_DESTINATION,
  basePrice: 10,
  isFavorite: false,
  offers: DEFAULT_OFFERS
};

const DateFormat = {
  DATETIME_ATTRIBUTE: 'YYYY-MM-DDTHH:mm',
  DAY: 'DD',
  MONTH: 'MMM',
  MONTH_DAY: 'MMM DD',
  HOUR_MINUTES: 'HH:MM',
  DAY_MONTH_YEAR: 'DD/MM/YY[&nbsp;]HH:mm',
  MINUTES_WITH_POSTFIX: 'mm[M]',
  HOUR_MINUTES_WITH_POSTFIX: 'HH[H] mm[M]',
  DAY_HOUR_MINUTES_WITH_POSTFIX: 'DD[D] HH[H] mm[M]'
};

const FILTE_TYPES = ['everything', 'future', 'present', 'past'];

const SORT_TYPES = ['day', 'event', 'time', 'price', 'offer'];

export {FILTER_TYPE, EVENT_TYPES, DEFAULT_POINT, DateFormat, FILTE_TYPES, SORT_TYPES};
