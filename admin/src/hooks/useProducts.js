import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product.api";

export function useProducts(params) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
    keepPreviousData: true,
  });
}