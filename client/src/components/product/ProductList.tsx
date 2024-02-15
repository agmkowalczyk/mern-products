import { useEffect, useState } from "react"
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../services/product"
import { Product } from "../../types"
import ProductDetails from "./ProductDetails"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import styled from "styled-components"
import Modal from "../shared/Modal"

const ProductList = () => {
  const { data: products, isSuccess: isSuccessGetProducts } =
    useGetAllProductsQuery()
  const [deleteProduct, { isError, isSuccess }] = useDeleteProductMutation()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    if (confirm("Czy jesteś pewien?")) {
      deleteProduct(id)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Produkt usunięty")
    }
    if (isError) {
      toast.error("Wystąpił błąd")
    }
  }, [isSuccess, isError])

  return (
    <div>
      <h2>Lista Produktów</h2>
      {isSuccessGetProducts && products.length === 0 ? (
        <p>No products</p>
      ) : (
        <List>
          {products?.map(product => (
            <ListItem key={product._id}>
              <span onClick={() => setSelectedProduct(product)}>
                {product.name}
              </span>
              <ListItemBtn
                onClick={() => navigate(`/products/${product._id}/edit`)}
              >
                Edytuj
              </ListItemBtn>
              <ListItemBtn onClick={() => handleDelete(product._id)} $delete>
                Usuń
              </ListItemBtn>
            </ListItem>
          ))}
        </List>
      )}

      {selectedProduct && (
        <Modal
          title="Szczegóły produktu"
          isOpen={!!selectedProduct._id}
          onClose={() => setSelectedProduct(null)}
        >
          <ProductDetails product={selectedProduct} />
        </Modal>
      )}
    </div>
  )
}

export default ProductList

const List = styled.ul`
  background: #fff;
`
const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background: #e3f4f4;
  font-size: 1rem;
  margin-bottom: 1px;

  &:hover {
    background: #d2e9e9;
  }

  display: flex;
  justify-content: space-between;

  & > :first-child {
    cursor: pointer;
    display: flex;
    flex: 1;
  }
`
const ListItemBtn = styled.button<{ $delete?: boolean }>`
  border: #ccc;
  background: ${props => (props.$delete ? "#D14D72" : "#73A9AD")};
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`
