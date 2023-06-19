import NextLink from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/solid/ArrowTopRightOnSquareIcon";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Logo } from "src/components/logo";
import { Scrollbar } from "src/components/scrollbar";
import { items, tabs } from "./config";
import { SideNavItem } from "./side-nav-item";

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "red",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p:3, display: "flex", alignItems: "center" }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: "inline-flex",
              height: 32,
              width: 32,
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: 1,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              p: "12px",
            }}
          >
            <div>
              <Typography color="neutral.grey" variant="subtitle1">
                Project M
              </Typography>
            </div>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "#DBDBDB" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              const active = item.path ? pathname === item.path : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: "#DBDBDB" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{
              pl: "16px",
              pr: "16px",
              py: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography color="neutral.grey" variant="subtitle2">
              MY PROJECTS
            </Typography>
            <img src="/assets/addsquare.png" height={"16px"} width={"16px"} />
          </Box>

          {tabs.map((item,index) => {
            return (
              <Box key={index}
                sx={{
                  pl: "16px",
                  pr: "16px",
                  py: "6px",
                  display: "flex",
                  alignItems: "center",
                  
                }}
              >
                {item.icon && (
                  <Box
                    component="span"
                    sx={{
                      alignItems: "center",
                      color: "neutral.400",
                      display: "inline-flex",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                )}
                <Typography color="neutral.grey" variant="subtitle2">
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#fff",
            color: "neutral.grey",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#fff",
          color: "neutral.grey",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
