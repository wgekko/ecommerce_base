import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const getAllOrders = await Order.find({})
        .populate("orderItems.product")
        .populate("user");

      if (getAllOrders) {
        return NextResponse.json({
          success: true,
          data: getAllOrders,
        });
      } else {
        return NextResponse.json({
          success: false,
          message:
          "¡Error al recuperar los pedidos! Inténtalo de nuevo después de un tiempo.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "No estás autorizado !",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Algo salió mal ! Por favor, inténtelo de nuevo más tarde",
    });
  }
}
