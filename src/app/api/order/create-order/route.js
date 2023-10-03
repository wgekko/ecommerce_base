import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { user } = data;

      const saveNewOrder = await Order.create(data);

      if (saveNewOrder) {
        await Cart.deleteMany({ userID: user });

        return NextResponse.json({
          success: true,
          message: "Los productos están en camino.!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "¡No se pudo crear un pedido! Inténtalo de nuevo",
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
