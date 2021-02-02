import items from '../mocks/items';
import { FeedItem } from '../types/FeedItem';

interface FeedServiceType {
  getFeed: () => FeedItem[];
}

const FeedService: FeedServiceType = {
  getFeed: () => {
    return items;
  },
};

export default FeedService;
