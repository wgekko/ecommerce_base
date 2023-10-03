import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Se requiere identificación del producto",
        });

      const extractOrderDetails = await Order.findById(id).populate(
        "orderItems.product"
      );

      if (extractOrderDetails) {
        return NextResponse.json({
          success: true,
          data: extractOrderDetails,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "¡No se pudieron obtener los detalles del pedido! Inténtalo de nuevo",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "No estas autorizado",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Algo salió mal ! Por favor, inténtelo de nuevo más tarde",
    });
  }
}
