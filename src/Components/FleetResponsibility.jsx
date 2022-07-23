import { Box, ListItem, OrderedList, Text } from "@chakra-ui/react";

export default function FleetResponsibility() {
  return (
    <Box color="#666">
      <Text fontSize="20px" fontWeight="bold" color="green.500">
        Member's Responsibility
      </Text>
      <br />
      <Text fontWeight="bold">
        If a Zoomcar member is violating the law or Zoomcar rules, for example
        by overspeeding or driving drunk, the member will be responsible for all
        damage, liability, and fines and could face legal action.
      </Text>
      <br />
      <Text fontWeight="bold">Responsibility for Payment:</Text>
      <br />
      <OrderedList lineHeight="22px" fontSize="14px" pl="6">
        <ListItem pb="3">
          Payments by Members shall be made with his/her credit card or debit
          card. The Member is under obligation to ensure that the account from
          which the amounts are to be collected have sufficient funds or credit
          available to cover any charges. Member is solely responsible for any
          associated bank or credit card charges or fees. Member may be charged
          a processing fee for a declined credit or debit card payment.
        </ListItem>
        <ListItem pb="3">
          In the event the Member defaults on any payments, Zoomcar is entitled
          to charge reminder fees and default interest in accordance with the
          provisions of the law. In addition, Zoomcar may utilize third parties
          to collect amounts owed to Zoomcar by a Member.
        </ListItem>
        <ListItem pb="3">
          With all fees mentioned above, Zoomcar reserves the right to prohibit
          a Member from making a subsequent reservation until all outstanding
          fees in the Member's account have been paid in full. In the event a
          fee is incurred, Members will receive an email invoice from Zoomcar
          that will have detailed payment instructions.
        </ListItem>
      </OrderedList>
      <br />
      <Text fontWeight="bold">Collision or other incident:</Text>
      <br />
      <OrderedList lineHeight="22px" fontSize="14px" pl="6">
        <ListItem pb="3">
          Zoomcar provides full wrap unlimited third party liability insurance
          without a maximum cap.
        </ListItem>
        <ListItem pb="3">
          If member is involved in an unintentional/non consequential
          incident/accident (including but not limited to a collision or misuse
          of the vehicle) Member will be responsible for a standard insurance
          deductible payment of up to ₹ 10,000. The Member will be obligated to
          pay the repair cost up to ₹ 10000. The payment owed will be deducted
          from the security deposit, if any. Should the security deposit not
          cover the payment (in the case the Member has accrued late return,
          excess km, etc charges) the balance of the payment owed shall be
          payable by the Member separately as an additional outstanding.
        </ListItem>
        <ListItem pb="3">
          Member will be responsible for all towing and impounding charges
          associated with a collision.
        </ListItem>
        <ListItem pb="3">
          Member will be responsible for all towing and impounding charges
          caused by member failure.
        </ListItem>
        <ListItem pb="3">
          Zoomcar will be responsible for all towing and impounding charges
          caused by vehicle failure.
        </ListItem>
        <ListItem pb="3">
          Member will be responsible for all applicable damages and costs,
          including those in excess of the applicable Damage Fee, arising from
          the Member's failure to comply with the terms of the Agreement and/or
          a violation of the law.
        </ListItem>
      </OrderedList>
      <br />
      <Text fontWeight="bold">Tolls:</Text>
      <br />
      <OrderedList lineHeight="22px" fontSize="14px" pl="6">
        <ListItem pb="3">
          Members are responsible for paying all tolls at the time they are due.
        </ListItem>
        <ListItem pb="3">
          Zoomcar vehicles are registered with an All India Permit, allowing the
          vehicle to enter any state in the country.
        </ListItem>
        <ListItem pb="3">
          Members must pay all inter-state taxes and fees upon entering into a
          neighbouring state. Zoomcar shall reimburse the State entry fees only
          in the event when the Member pays for the duration of 3 months or
          more.
        </ListItem>
      </OrderedList>
      <br />
      <Text lineHeight="22px" fontSize="14px">
        By joining Zoomcar, the Member agrees to pay Zoomcar the costs, charges,
        fees and expenses set out in the Agreement, including specifically and
        without limitation those set forth in this schedule. The following is
        not exhaustive and other specific fees, costs and charges may apply.
        Other applicable costs will be communicated to the Member. Capitalized
        terms used in this schedule shall have the same meaning assigned to such
        terms in the Agreement.
      </Text>
      <br />
      <Text lineHeight="22px" fontSize="14px">
        Zoomcar reserves the right to change the terms of this Policy from time
        to time and shall give notice of such changes to the Member in a timely
        manner. Notice to the Members shall be considered given when such notice
        is indicated and accessible from the first page accessed after the
        Member log-on to the Zoomcar website, or by email to the Member's email
        address provided to Zoomcar in the Member's application or most recently
        provided to Zoomcar. Member agrees that the amended terms and conditions
        of this Agreement shall be effective and binding the earlier of (1) the
        effective date indicated in such notice; or (2) on the date posted on
        Zoomcar's website.
      </Text>
    </Box>
  );
}
