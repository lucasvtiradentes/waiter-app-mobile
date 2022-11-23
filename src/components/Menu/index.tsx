import { useState } from 'react';
import { FlatList } from 'react-native';
import { PlusCircle } from '../../assets/Icons/PlusCircle';
import { formatCurrency } from '../../utils/formatCurrency';
import { Text } from '../../utils/Text';
import { ProductModal } from '../ProductModal';

import { IProduct } from '../../types/Product';

import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { API_IMAGE_URL } from '../../configs/configs';

interface propsType {
  addProductFn: (product: IProduct) => void
  selectedTable: string;
  products: IProduct[];
}

const Menu = ({addProductFn, selectedTable, products}: propsType) => {

  const [isPorductModalVisible, setIsPorductModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | IProduct>(null);

  const handleShowProductModal = (product: IProduct) => {
    setIsPorductModalVisible(true);
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setIsPorductModalVisible(false);
  };

  return (
    <>
      <FlatList
        data={products}
        ItemSeparatorComponent={Separator}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        renderItem={({ item: product }) => {

          const finalImage = `${API_IMAGE_URL}/${product.imagePath}`;

          return (
            <Product onPress={() => handleShowProductModal(product)}>
              <ProductImage source={{ uri: finalImage }} />
              <ProductDetails>
                <Text weight="600">{product.name}</Text>
                <Text size={14} color="#666" style={{marginVertical: 8}}>{product.description}</Text>
                <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
              </ProductDetails>

              <AddToCartButton onPress={() => addProductFn(product)}>
                <PlusCircle disabled={selectedTable.length === 0}/>
              </AddToCartButton>
            </Product>
          );
        }}
      />
      <ProductModal product={selectedProduct} visible={isPorductModalVisible} onClose={handleCloseProductModal}/>
    </>

  );
};

export { Menu };
