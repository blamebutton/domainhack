import { shallowMount } from '@vue/test-utils';
import DomainInput from '@/components/DomainInput.vue';

describe('DomainInput.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(DomainInput, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
