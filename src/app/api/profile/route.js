import { NextResponse } from "next/server";

// Mock database storage - replace with actual MongoDB connection
let profileDatabase = {};

// GET handler to fetch user profile
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Return profile data from mock database
    const profile = profileDatabase[userId] || null;
    
    return NextResponse.json({ profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST handler to create new profile
export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, ...profileData } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Store profile in mock database
    profileDatabase[userId] = {
      ...profileData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(
      { message: "Profile created successfully", profile: profileDatabase[userId] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT handler to update existing profile
export async function PUT(request) {
  try {
    const body = await request.json();
    const { userId, ...profileData } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Check if profile exists
    if (!profileDatabase[userId]) {
      return NextResponse.json(
        { error: "Profile not found" },
        { status: 404 }
      );
    }

    // Update profile in mock database
    profileDatabase[userId] = {
      ...profileDatabase[userId],
      ...profileData,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(
      { message: "Profile updated successfully", profile: profileDatabase[userId] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE handler to delete profile
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Check if profile exists
    if (!profileDatabase[userId]) {
      return NextResponse.json(
        { error: "Profile not found" },
        { status: 404 }
      );
    }

    // Delete profile from mock database
    delete profileDatabase[userId];

    return NextResponse.json(
      { message: "Profile deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
