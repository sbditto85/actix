(function() {var implementors = {};
implementors["actix"] = ["impl&lt;A:&nbsp;<a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"actix/struct.Addr.html\" title=\"struct actix::Addr\">Addr</a>&lt;<a class=\"struct\" href=\"actix/struct.Syn.html\" title=\"struct actix::Syn\">Syn</a>, A&gt;","impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"actix/struct.Recipient.html\" title=\"struct actix::Recipient\">Recipient</a>&lt;<a class=\"struct\" href=\"actix/struct.Syn.html\" title=\"struct actix::Syn\">Syn</a>, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
