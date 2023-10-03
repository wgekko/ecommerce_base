import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

      const extractAllproducts = await Product.find({});

      if (extractAllproducts) {
        return NextResponse.json({
          success: true,
          data: extractAllproducts,
        });
      } else {
        return NextResponse.json({
          success: false,
          status: 204,
          message: "No se encontraron productos",
        });
      }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Algo salió mal ! Por favor, inténtelo de nuevo más tarde",
    });
  }
}
