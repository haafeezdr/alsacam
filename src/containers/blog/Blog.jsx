import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>

      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <br /> We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imageUrl={blog1} date="Sep 26, 2011" title="The bustling artisanal mining site with a massive crowd of miners working under challenging conditions. Bags of extracted minerals are stacked around the site, showing the scale of activity. Artisanal mining often involves manual labor with limited machinery, as seen here. This type of mining, common in developing countries, is a primary livelihood source for many but comes with significant risks, including unsafe working conditions and environmental degradation." />
          
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imageUrl={blog2} date="Sep 21, 2021" title="A group of miners engaged in traditional gold panning. They sift through muddy water with simple tools, such as sieves and pans, to extract precious minerals. This form of mining relies heavily on physical labor and local water resources, often in rural settings. While it can be effective for small-scale gold extraction, the activity may contribute to water pollution and soil erosion, affecting surrounding ecosystems." />
          <Article imageUrl={blog3} date="Jan 26, 2021" title="Workers in an open-pit mine, extracting minerals from a large, hand-dug crater. The reddish soil indicates the presence of specific types of minerals or gemstones. Basic equipment, such as shovels and makeshift pumps, is being used, reflecting the limited resources available to these miners. Open-pit mining like this can lead to land degradation and exposes workers to hazards like collapsing walls and unsafe water conditions." />
          <Article imageUrl={blog4} date="Aug 06, 2017" title="Unlike industrial mining, traditional means require human labor and local means. It is highly dependent on the human factor which leads to loss of lifes in accident and environmental degradation like water pollution and soil erosion and habitat destruction" />
          <Article imageUrl={blog5} date="Nov 04, 2014" title="Industrial mining operation. Heavy machinery, including excavators and large trucks, dominate the site, efficiently extracting resources on a massive scale. Such mining operations are highly mechanized and often focus on coal, oil sands, or metallic minerals. While these projects contribute significantly to economic growth, they also come with significant environmental costs, such as habitat destruction and carbon emissions." />
        </div>
      </div>
    </div>
  )
}

export default Blog