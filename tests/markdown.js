const Box = ({ icon, children }) => "> :" + icon + ": " + children

const LoveBox = ({ children }) => <Box icon="heart">{children}</Box>