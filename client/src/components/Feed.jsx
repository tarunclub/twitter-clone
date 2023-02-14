import { ArrowPathIcon } from '@heroicons/react/24/outline';
import TweetBox from './TweetBox';
import { useQuery } from 'react-query';
import { makeRequest } from '../axios';
import Tweet from './Tweet';

function Feed() {
  const { isLoading, error, data } = useQuery(['posts'], () =>
    makeRequest.get('/posts').then((res) => {
      return res.data;
    })
  );
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      {/* Top Section */}
      <div className="flex items-center justify-between border-b py-1">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="h-6 w-6 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      {/* Tweet Box */}
      <div>
        <TweetBox />
      </div>

      <div>
        {error
          ? 'Something went wrong'
          : isLoading
          ? 'loading'
          : data.map((post) => <Tweet post={post} key={post.id} />)}
      </div>
    </div>
  );
}

export default Feed;
