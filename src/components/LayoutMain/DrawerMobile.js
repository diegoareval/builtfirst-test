import ButtonPrimary from "../../components/ButtonPrimary";
import { COLORS } from "../../utils";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";

const ButtonMenuMobile = ({
  toggleMenu,
  isVisible,
  scrollGarden,
  scrollTeam,
  connectWallet,
  showVirtualGarden,
  joinDiscord,
  isLandingPage = false,
  className = "",
}) => {
  const navigate = useNavigate();

  return (
    <>
      <ButtonPrimary
        className={`block md:hidden ${className}`}
        color={COLORS.green}
        title="Menu"
        onClick={toggleMenu}
      />

      <Drawer open={isVisible} onClose={toggleMenu} direction="right">
        <div className="h-full w-full overflow-y-auto flex flex-col gap-4 p-8">
          <div
            className="flex flex-col items-center"
            onClick={() => navigate("/")}
          >
           ICON
          </div>

          {isLandingPage && (
            <ButtonPrimary
              color={COLORS.purple}
              title="CONNECT WALLET"
              onClick={connectWallet}
            />
          )}

          <ButtonPrimary
            color={COLORS.green}
            title="VIRTUAL GARDEN"
            onClick={showVirtualGarden}
          />

          {isLandingPage && (
            <>
              <ButtonPrimary
                color={COLORS.green}
                title="TEAM"
                onClick={scrollTeam}
              />
              <ButtonPrimary
                color={COLORS.red}
                title="GARDEN PATH"
                onClick={scrollGarden}
              />
            </>
          )}

          <ButtonPrimary
            color={COLORS.red}
            title="JOIN DISCORD!"
            onClick={joinDiscord}
          />

          <ButtonPrimary
            color={COLORS.purple}
            title="AUCTION"
            onClick={() => navigate("/auction")}
          />
          <ButtonPrimary
            color={COLORS.purple}
            title="FAQ"
            onClick={() => navigate("/faq")}
          />
          <ButtonPrimary
            color={COLORS.purple}
            title="DISCLAIMER"
            onClick={() => navigate("/disclaimer")}
          />
        </div>
      </Drawer>
    </>
  );
};

export default ButtonMenuMobile;
