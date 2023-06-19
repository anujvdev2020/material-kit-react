import PropTypes from "prop-types";
import BellIcon from "@heroicons/react/24/solid/BellIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { usePopover } from "src/hooks/use-popover";
import { AccountPopover } from "./account-popover";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const accountPopover = usePopover();
  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          borderBottom: "1px solid #DBDBDB",
          position: "sticky",
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
            py: 3,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
            <Box>
              <TextField
                id="input-with-icon-textfield"
                sx={{
                  height: "35px",
                  width: {
                    lg: `calc(100% - ${20}px)`,
                  },
                }}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src="/assets/search.png" height={"22px"} width={"22px"} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Tooltip title="Contacts">
              <IconButton>
                <img src="/assets/calendar.png" height={"24px"} width={"24px"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Messages">
              <IconButton>
                <img src="/assets/msgsQuestion.png" height={"24px"} width={"24px"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <img src="/assets/notification.png" height={"24px"} width={"24px"} />
              </IconButton>
            </Tooltip>
            {lgUp && (
              <Box>
                <Typography color="neutral.grey" variant="subtitle2">
                  Anima Agarwal
                </Typography>
                <Typography color="neutral.grey" variant="subtitle2">
                  U.P, India
                </Typography>
              </Box>
            )}

            {lgUp && (
              <Avatar
                onClick={accountPopover.handleOpen}
                ref={accountPopover.anchorRef}
                sx={{
                  cursor: "pointer",
                  height: 40,
                  width: 40,
                }}
                src="/assets/avatars/avatar-anika-visser.png"
              />
            )}
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
};
