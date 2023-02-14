import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
      {/* Search Box */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full my-2">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent outline-none flex-1"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 500 }}
      />
    </div>
  );
}

export default Widgets;
