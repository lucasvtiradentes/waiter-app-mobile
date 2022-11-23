import { CategoriesContainer } from '../Categories/styles';
import { FooterContainer, Footer } from '../Footer/styles';
import { MenuContainer } from '../Menu/styles';
import { Container, NoProdcuts } from './styles';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { Categories } from '../Categories';
import { Button } from '../Button';
import { TableModal } from '../TableModal';
import { useState, useEffect } from 'react';
import { Cart } from '../Cart';
import { ICartItem } from '../../types/CartItem';
import { IProduct } from '../../types/Product';
import { ICategory } from '../../types/Category';
import { Text } from '../../utils/Text';
import { Loading } from '../../assets/Icons/Loading';
import { api } from '../../utils/api';

const Main = () => {

  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get('/categories'),
      api.get('/products')
    ]).then((response) => {
      const [cats, prods] = response;
      setCategories(cats.data);
      setProducts(prods.data);
      setIsLoading(false);
    });
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    setIsLoadingProducts(true);
    const productsRoute = categoryId === '' ? '/products' : `/categories/${categoryId}/products`;
    api.get(productsRoute).then(({ data }) => {
      setProducts(data);
      setIsLoadingProducts(false);
    });
  };

  const handleAddNewOrder = () => {
    setModalVisibility(true);
  };

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
    setModalVisibility(false);
  };

  const handleClearOrder = () => {
    setSelectedTable('');
    setCartItems([]);
  };

  const HandleCartAddNewProduct = (product: IProduct) => {

    let newCartItems: ICartItem[] = cartItems;

    const productIndex = cartItems.findIndex((item) => item.product._id === product._id);

    if (productIndex === -1) {
      newCartItems = [...cartItems, { product, quantity: 1 }];
    } else {
      newCartItems = cartItems.map((item, index) => {
        let newCartItem: ICartItem = item;

        if (index === productIndex) {
          newCartItem = {
            product,
            quantity: item.quantity + 1
          };
        }
        return newCartItem;
      });
    }

    setCartItems(newCartItems);
  };

  const handleCartChangeProductQuantity = (cartItem: ICartItem, qnt: number) => {

    let newCartItems: ICartItem[] = cartItems;

    if (cartItem.quantity === 1 && qnt === -1) {
      newCartItems = cartItems.filter((item) => item.product._id !== cartItem.product._id);
    } else {
      newCartItems = cartItems.map((item) => {
        if (item.product._id === cartItem.product._id) {
          return {
            product: item.product,
            quantity: cartItem.quantity + qnt
          };
        } else {
          return item;
        }
      });
    }

    setCartItems(newCartItems);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <Header selectedTable={selectedTable} onCancel={handleClearOrder} />

            {categories.length > 0 && (
              <CategoriesContainer>
                <Categories onSelectCategory={handleSelectCategory} categories={categories} />
              </CategoriesContainer>
            )}

            {isLoadingProducts ? (
              <Loading />
            ) : (
              <>
                {products.length === 0 ? (
                  <NoProdcuts>
                    <Text>Nenhum produto foi encontrado!</Text>
                  </NoProdcuts>
                ) : (
                  <>
                    <MenuContainer>
                      <Menu products={products} addProductFn={HandleCartAddNewProduct} selectedTable={selectedTable} />
                    </MenuContainer>
                  </>
                )}
              </>
            )}

          </Container>

          <Footer>
            <FooterContainer>
              {!selectedTable && (
                <Button onPress={handleAddNewOrder}>Novo pedido</Button>
              )}

              {cartItems.length > 0 && (
                <Cart onConfirmedOrder={handleClearOrder} selectedTable={selectedTable} cartItems={cartItems} changeQuantityFn={handleCartChangeProductQuantity}></Cart>
              )}
            </FooterContainer>
          </Footer>

          <TableModal visible={modalVisibility} onSave={handleSaveTable} onClose={() => setModalVisibility(false)} />

        </>
      )}

    </>
  );
};

export { Main };
