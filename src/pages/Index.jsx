import React, { useEffect, useState } from "react";
import { Container, VStack, Text, Box, Spinner } from "@chakra-ui/react";
import { FaBoxOpen } from "react-icons/fa";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetching data from /product endpoint
    setTimeout(() => {
      const mockProducts = [
        { id: 1, name: "Product 1", description: "Description for product 1" },
        { id: 2, name: "Product 2", description: "Description for product 2" },
        { id: 3, name: "Product 3", description: "Description for product 3" },
      ];
      setProducts(mockProducts);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Product List</Text>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          products.map((product) => (
            <Box key={product.id} p={5} shadow="md" borderWidth="1px" width="100%">
              <Text fontSize="xl" fontWeight="bold">
                <FaBoxOpen style={{ marginRight: "8px" }} />
                {product.name}
              </Text>
              <Text mt={4}>{product.description}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;
