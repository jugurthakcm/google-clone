import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
  const [{ term }] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // const data = response;

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt=''
            className='searchPage__logo'
          />
        </Link>

        <div className='searchPage__headerBody'>
          <Search hideButtons />
          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div class='searchPage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div class='searchPage__option'>
                <DescriptionIcon />
                <Link to='/all'>News</Link>
              </div>
              <div class='searchPage__option'>
                <ImageIcon />
                <Link to='/all'>Images</Link>
              </div>
              <div class='searchPage__option'>
                <LocalOfferIcon />
                <Link to='/all'>Shopping</Link>
              </div>
              <div class='searchPage__option'>
                <RoomIcon />
                <Link to='/all'>Maps</Link>
              </div>
              <div class='searchPage__option'>
                <MoreVertIcon />
                <Link to='/all'>More</Link>
              </div>
            </div>
            <div className='searchPage__optionsRight'>
              <div class='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div class='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.searchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className='searchPage__result'>
              <a className='.searchPage__resultLink ' href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className='searchPage__resultImage'
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=''
                    />
                  )}
                {item.displayLink}
              </a>
              <a className='searchPage__resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='.searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
