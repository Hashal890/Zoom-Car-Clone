import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function NoteOneFleet() {
  return (
    <Box fontSize="14px" color="#666" textAlign="justify">
      <Text fontWeight="bold">Note:</Text>
      <br />
      <UnorderedList pl="7" lineHeight="25px">
        <ListItem>
          <sup>#</sup>
          Handover pursuant to the original booking, extensions and
          modifications are subject to availability of the vehicle.
        </ListItem>
        <ListItem>
          Your free KMs are calculated based on the latest scheduled pick up
          time to the latest scheduled drop off time or to the actual drop off
          time whichever is later.
        </ListItem>
        <ListItem>
          All Refunds made shall be through the original payment account only
          within 1 working day. We are giving full refunds of any amount paid by
          you as under:
          <UnorderedList pl="5">
            <ListItem>as a security deposit and/or,</ListItem>
            <ListItem>
              amount falling under the free cancellation period and/ or,
            </ListItem>
            <ListItem>
              any other valid charges that you are entitled to.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          In case, you opt for getting the refund amount in the form of Zoomcar
          Coupons, then the amount you are entitled to receive will be
          considered as settled irrespective of whether the coupon is utilized
          or not.
        </ListItem>
        <ListItem>
          Zoomcar reserves the right to charge a fee for specific pre-defined
          accessories.
        </ListItem>
      </UnorderedList>
      <br />
      <Text>
        Also, a list of penalties that can be levied if members violate certain
        Zoomcar community rules.
      </Text>
      <br />
    </Box>
  );
}
