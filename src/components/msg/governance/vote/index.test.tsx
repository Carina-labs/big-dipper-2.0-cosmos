import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgVote } from '@models';
import Vote from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('next/link', () => ({
  Link: (props) => <div id="Link" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgVote', () => {
  it('matches snapshot', () => {
    const message = MsgVote.fromJson({
      category: 'governance',
      type: 'MsgVote',
      proposalId: 10,
      voter: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      option: 'VOTE_OPTION_NO',
      json: {
        content: {
          '@type': '/cosmos.gov.v1beta1.TextProposal',

        },
      },
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Vote
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:txVoteContent');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
