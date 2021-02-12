import CODE_OPTIONS from "./code_options";
import SITDOWN_OPTIONS from "./sitdown_options";
import TUTORIALS from "./tutorials";
import IMAGE_HOSTING_NAMES from "./image_hosting_names";

export const CLIENT_ID = process.env.NODE_ENV === "development" ? "e791aa2a7a64b3f766a2" : "b3a3c46bd66318367efa";
export const CLIENT_SECRET =
  process.env.NODE_ENV === "development"
    ? "e80cde65c7071286086077892f3336bc2a3f4576"
    : "dfd9fdc1da6a6b10e473280bf0a379513f1d154d";

export const PROXY = "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token";
export const SM_MS_PROXY = "https://cors-anywhere.herokuapp.com/https://sm.ms/api/upload";
export const ACCESS_TOKEN = "ACCESS_TOKEN";

export const USERNAME = "username";
export const AVATAR = "avatar";
export const USERID = "userId";
export const EMAIL = "email";
export const TOKEN = "token";

export const MJX_DATA_FORMULA = "data-formula";
export const MJX_DATA_FORMULA_TYPE = "data-formula-type";

export const CONTENT = "content";
export const STYLE = "style";
export const TEMPLATE_NUM = "template_num";
export const CODE_NUM = "code_num";
export const THEME_LIST = "theme_list";
export const PREVIEW_TYPE = "preview_type";
export const IS_SYNC_SCROLL = "is_sync_scroll";
export const IS_CONTAIN_IMG_NAME = "is_contain_img_name";
export const IS_MAC_CODE = "is_mac_code";
export const NEWEST_VERSION = "newest_version";
export const ALIOSS_IMAGE_HOSTING = "alioss_image_hosting";
export const GITEE_IMAGE_HOSTING = "gitee_image_hosting";
export const GITHUB_IMAGE_HOSTING = "github_image_hosting";
export const QINIUOSS_IMAGE_HOSTING = "qiniuoss_image_hosting";
export const IMAGE_HOSTING_TYPE = "image_hosting_type";
export const BASIC_THEME_ID = "basic-theme";
export const CODE_THEME_ID = "code-theme";
export const MARKDOWN_THEME_ID = "markdown-theme";
export const FONT_THEME_ID = "font-theme";
export const LAYOUT_ID = "nice";
export const BOX_ID = "nice-rich-text-box";
export const RIGHT_SYMBOL = "✔️";
export const EXPORT_FILENAME_SUFFIX = ".md";

export const STYLE_LABELS = ["basic-theme", "markdown-theme", "code-theme", "font-theme"];

export const ENTER_DELAY = 0.5;
export const LEAVE_DELAY = 0.0;

export const MAX_MD_NUMBER = 100000;
export const THROTTLE_MATHJAX_TIME = 1500;
export const THROTTLE_MD_RENDER_TIME = 100;
export {CODE_OPTIONS, SITDOWN_OPTIONS, TUTORIALS, IMAGE_HOSTING_NAMES};
