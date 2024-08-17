'use client';

import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating, {RatingPropsSizeOverrides} from '@mui/material/Rating';
import {FC} from "react";
import {OverridableStringUnion} from "@mui/types";

interface IProps {
    rating: number;
    size: OverridableStringUnion<"small" | "medium" | "large", RatingPropsSizeOverrides>;
}

const StyledRating = styled(Rating)(() => ({
    '& .MuiRating-iconFilled': {
        color: 'green',
    },
    '& .MuiRating-iconEmpty': {
        color: 'grey',
    },
    '& .MuiRating-icon': {
        margin: '2px'
    },
}));

const StarRatings: FC<IProps> = ({ rating, size}) => {
    return (
        <Box>
            <StyledRating
                value={rating}
                max={10}
                precision={0.5}
                readOnly
                size={size}
            />
        </Box>
    );
};

export default StarRatings;
