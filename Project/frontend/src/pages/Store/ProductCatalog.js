import React from 'react'
import styled from 'styled-components'
import Annoucement from '../../components/store/Announcement'
import CategoryMenu from '../../components/store/CategoryMenu'
import Footer from '../../components/store/Footer'
import Navbar from '../../components/store/Navbar'
import Newsletter from '../../components/store/Newsletter'
import Products from '../../components/store/Products'
import StoreSearch from '../../components/store/StoreSearch'

const Catalog = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const CategoryList = styled.div`
  flex: 1;
  background-color: white;
`
const ProductList = styled.div`
  flex: 5;
`

const ProductCatalog = () => {
  return (
    <div>
        <Navbar />
        <Annoucement />
        <StoreSearch />

        <Catalog>
          <CategoryList>
            <CategoryMenu />
          </CategoryList>
          <ProductList>
            <Products />
          </ProductList>
        </Catalog>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductCatalog