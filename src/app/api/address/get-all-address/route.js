import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Usted no se ha identificado",
      });
    }

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const getAllAddresses = await Address.find({ userID: id });

      if (getAllAddresses) {
        return NextResponse.json({
          success: true,
          data: getAllAddresses,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "¡No pude obtener direcciones! Inténtalo de nuevo",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "No estas autorizado",
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
