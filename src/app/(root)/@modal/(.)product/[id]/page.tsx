import { notFound } from "next/navigation";
import { prisma } from "../../../../../../prisma/prisma-client"
import { ChooseProductModal, Container, ProductImage, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/group-variants";

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      items: true,
    }
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />
}