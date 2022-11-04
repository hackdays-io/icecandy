// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IScoreModule} from "../interfaces/IScoreModule.sol";
import {IFlavorExtension} from "../interfaces/IFlavorExtension.sol";

library ExtensionLogic {
    function judgeFlavorExtension(IScoreModule.ScoreStruct[] memory score)
        internal
        pure
        returns (IFlavorExtension.FlavorType[] memory)
    {
        if (score[0].point >= 500) {
            IFlavorExtension.FlavorType[] memory flavorTypes = new IFlavorExtension.FlavorType[](5);
            flavorTypes[0] = IFlavorExtension.FlavorType.RICH;
            flavorTypes[1] = IFlavorExtension.FlavorType.REFRESHING;
            flavorTypes[2] = IFlavorExtension.FlavorType.CHOCOLATE;
            flavorTypes[3] = IFlavorExtension.FlavorType.FRUITY;
            flavorTypes[4] = IFlavorExtension.FlavorType.ELEGANT;
            return flavorTypes;
        } else if (score[0].point >= 400) {
            IFlavorExtension.FlavorType[] memory flavorTypes = new IFlavorExtension.FlavorType[](4);
            flavorTypes[0] = IFlavorExtension.FlavorType.RICH;
            flavorTypes[1] = IFlavorExtension.FlavorType.REFRESHING;
            flavorTypes[2] = IFlavorExtension.FlavorType.CHOCOLATE;
            flavorTypes[3] = IFlavorExtension.FlavorType.FRUITY;
            return flavorTypes;
        } else if (score[0].point >= 300) {
            IFlavorExtension.FlavorType[] memory flavorTypes = new IFlavorExtension.FlavorType[](3);
            flavorTypes[0] = IFlavorExtension.FlavorType.RICH;
            flavorTypes[1] = IFlavorExtension.FlavorType.REFRESHING;
            flavorTypes[2] = IFlavorExtension.FlavorType.CHOCOLATE;
            return flavorTypes;
        } else if (score[0].point >= 200) {
            IFlavorExtension.FlavorType[] memory flavorTypes = new IFlavorExtension.FlavorType[](2);
            flavorTypes[0] = IFlavorExtension.FlavorType.RICH;
            flavorTypes[1] = IFlavorExtension.FlavorType.REFRESHING;
            return flavorTypes;
        } else if (score[0].point >= 100) {
            IFlavorExtension.FlavorType[] memory flavorTypes = new IFlavorExtension.FlavorType[](1);
            flavorTypes[0] = IFlavorExtension.FlavorType.RICH;
            return flavorTypes;
        } else {
            return new IFlavorExtension.FlavorType[](0);
        }
    }
}
