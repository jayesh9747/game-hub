import usePlatforms from "./usePlatforms";

const usePlatformById = (selectedPlatformID?: Number) => {
    const { data, error } = usePlatforms();

    return data?.results.find(
        (p) => p.id === selectedPlatformID
    );

}

export default usePlatformById;