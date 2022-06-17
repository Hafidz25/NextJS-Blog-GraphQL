import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';


const FeaturedPostCard = ({ post }) => (
  <div className="relative h-36 lg:h-52">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-36 lg:h-52" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
      <div className="absolute rounded-lg bg-center w-full h-36 lg:h-52 hover:bg-gray-100" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
          <p className="text-white mb-2 text-shadow font-medium lg:font-semibold text-sm lg:text-md">{moment(post.createdAt).format('DD MMM, YYYY')}</p>
          <p className="text-white mb-6 lg:mb-4 text-shadow font-semibold text-xl lg:text-4xl text-center">{post.title}</p>
          <div className="flex items-center absolute bottom-5 w-full justify-center">
            <Image
              unoptimized
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle drop-shadow-lg rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
          </div>
        </div>
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer bg-black bg-opacity-70 trasition duration-300 hover:bg-opacity-0 rounded-lg absolute w-full h-full" />

    </Link>
  </div>
);

export default FeaturedPostCard;