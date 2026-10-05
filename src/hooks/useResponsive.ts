import { useWindowDimensions } from "react-native";

export function useResponsive() {
    const { width, height } = useWindowDimensions();

    const screenWidth = width;
    const screenHeight = height;

    // ─────────────────────────────────────
    // Margin
    // ─────────────────────────────────────

    const margin1 = screenHeight / 845.33;
    const margin2 = screenHeight / 422.665;
    const margin3 = screenHeight / 281.7767;
    const margin4 = screenHeight / 211.3325;
    const margin5 = screenHeight / 169.066;

    // ─────────────────────────────────────
    // Font
    // ─────────────────────────────────────

    const font1 = screenHeight / 845.33;
    const font2 = screenHeight / 422.665;
    const font3 = screenHeight / 281.7767;
    const font4 = screenHeight / 211.3325;
    const font5 = screenHeight / 169.066;

    // ─────────────────────────────────────
    // Padding
    // ─────────────────────────────────────

    const padding1 = screenHeight / 845.33;
    const padding2 = screenHeight / 422.665;
    const padding3 = screenHeight / 281.7767;
    const padding4 = screenHeight / 211.3325;
    const padding5 = screenHeight / 169.066;

    // ─────────────────────────────────────
    // Width
    // ─────────────────────────────────────

    const width1 = screenHeight / 845.33;
    const width2 = screenHeight / 422.665;
    const width3 = screenHeight / 281.7767;
    const width4 = screenHeight / 211.3325;
    const width5 = screenHeight / 169.066;

    // ─────────────────────────────────────
    // Gap
    // ─────────────────────────────────────

    const gap1 = screenHeight / 845.33;
    const gap2 = screenHeight / 422.665;
    const gap3 = screenHeight / 281.7767;
    const gap4 = screenHeight / 211.3325;
    const gap5 = screenHeight / 169.066;

    // ─────────────────────────────────────
    // Size
    // ─────────────────────────────────────

    const size1 = screenHeight / 845.33;
    const size2 = screenHeight / 422.665;
    const size3 = screenHeight / 281.7767;
    const size4 = screenHeight / 211.3325;
    const size5 = screenHeight / 169.066;

    // ─────────────────────────────────────
    // Height
    // ─────────────────────────────────────

    const height1 = screenHeight / 845.33;
    const height2 = screenHeight / 422.665;
    const height3 = screenHeight / 281.7767;
    const height4 = screenHeight / 211.3325;
    const height5 = screenHeight / 169.066;

    return {
        screenWidth,
        screenHeight,

        margin1,
        margin2,
        margin3,
        margin4,
        margin5,

        font1,
        font2,
        font3,
        font4,
        font5,

        padding1,
        padding2,
        padding3,
        padding4,
        padding5,

        width1,
        width2,
        width3,
        width4,
        width5,

        gap1,
        gap2,
        gap3,
        gap4,
        gap5,

        size1,
        size2,
        size3,
        size4,
        size5,

        height1,
        height2,
        height3,
        height4,
        height5,
    };
}