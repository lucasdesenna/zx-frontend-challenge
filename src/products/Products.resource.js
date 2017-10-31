const rp = require('request-promise');
const apiUri = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql';

const ProductsResource = {
  getPOCs: (lat: string, lng: string) => {
    const query = `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
        pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
          __typename
          id
          status
          tradingName
          officialName
          deliveryTypes {
            __typename
            pocDeliveryTypeId
            deliveryTypeId
            price
            title
            subtitle
            active
          }
          paymentMethods {
            __typename
            pocPaymentMethodId
            paymentMethodId
            active
            title
            subtitle
          }
          pocWorkDay {
            __typename
            weekDay
            active
            workingInterval {
              __typename
              openingTime
              closingTime
            }
          }
          address {
            __typename
            address1
            address2
            number
            city
            province
            zip
            coordinates
          }
          phone {
            __typename
            phoneNumber
          }
        }
      }`;

    const requestBody = {
      query: query,
      variables: {
        algorithm: 'NEAREST',
        lat: lat,
        long: lng,
        now: new Date()
          .toISOString(),
      },
    };

    const requestOptions = {
      uri: apiUri,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: requestBody,
      json: true,
      transform: (response) => {
        return response.data.pocSearch;
      }
    };

    return rp(requestOptions);
  },
  getProducts: (lat: string, lng: string) => {
    const query = `query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
      poc(id: $id) {
        products(categoryId: $categoryId, search: $search) {
          productVariants{
            title
            description
            imageUrl
            price
          }
        }
      }
    }`;

    const requestBody = {
      query: query,
      variables: {
        search: '',
        categoryId: 0
      }
    };

    const requestOptions = {
      uri: apiUri,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: requestBody,
      json: true,
      transform: (response) => {
        return response.data.poc.products;
      }
    };

    return ProductsResource.getPOCs(lat, lng)
      .then((response) => {
        const firstPOC = response[0];
        if (firstPOC) {
          requestOptions.body.variables.id = firstPOC.id;

          return rp(requestOptions);
        }

        return [];
      })
      .catch((err) => {
        console.warn(err);
      });
  }
}

export default ProductsResource;
