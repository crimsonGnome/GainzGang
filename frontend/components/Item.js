import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/TitleStyles';
import ItemStyles from './styles/ItemStyles';
import PriceTag, {
  OgPriceTagClearance,
  PriceTagClearance,
} from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import User from './User';

export default class Item extends Component {
  // static propTypes = {
  //   item: PropTypes.object.isRequired,
  // };

  render() {
    const {
      id,
      image,
      title,
      price,
      onClearance,
      clearancePrice,
    } = this.props.item;

    return (
      <ItemStyles>
        {image && (
          <Link
            href={{
              pathname: '/product',
              query: { id: id },
            }}
          >
            <img src={image[0]} alt={title} />
          </Link>
        )}
        {onClearance === true ? (
          <>
            <OgPriceTagClearance>{formatMoney(price)}</OgPriceTagClearance>
            <PriceTagClearance>{formatMoney(clearancePrice)}</PriceTagClearance>
          </>
        ) : (
          <PriceTag>{formatMoney(price)}</PriceTag>
        )}

        {/* <p>{description}</p> */}

        <div className="buttonList">
          <User>
            {({ data: { me } }) => (
              <>
                {me &&
                  (me.adminView ? (
                    <>
                      <Link
                        href={{
                          pathname: 'update',
                          query: { id: id },
                        }}
                      >
                        <a>
                          Edit <i className="fas fa-pencil-alt" />
                        </a>
                      </Link>
                      <DeleteItem id={id}>Delete This Item</DeleteItem>
                    </>
                  ) : (
                    <Link
                      href={{
                        pathname: '/product',
                        query: { id: id },
                      }}
                    >
                      <div>Add to Cart</div>
                    </Link>
                  ))}
                {!me && (
                  <Link href="signup">
                    <a>Please Sign Up to Add to Cart 🛒</a>
                  </Link>
                )}
              </>
            )}
          </User>
        </div>
      </ItemStyles>
    );
  }
}
