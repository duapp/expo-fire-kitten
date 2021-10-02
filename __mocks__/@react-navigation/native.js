export const mockGoBack = jest.fn();

export const useNavigation = () => ({
  goBack: mockGoBack,
});
