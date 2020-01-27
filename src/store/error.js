export default function (state = null, { error }) {
  if (error) {
    return { error };
  }
  return state;
}
