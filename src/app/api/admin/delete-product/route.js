import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Se requiere ID del producto",
        });

      const deletedProduct = await Product.findByIdAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "Producto eliminado exitosamente",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "¡No se pudo eliminar el producto! Inténtalo de nuevo",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "No estás autoriado",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Algo salió mal ! Por favor, inténtelo de nuevo más tarde",
    });
  }
}
